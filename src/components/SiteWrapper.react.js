// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";

import { NotificationProps } from "tabler-react";
import InnerSiteWrapper from "./base/site/InnerSiteWrapper.react";

type Props = {|
  +children: React.Node,
  +showFooter: boolean
    |};

type State = {|
  notificationsObjects: Array < NotificationProps >,
|};

type subNavItem = {|
  +value: string,
  +to ?: string,
  +icon ?: string,
  +LinkComponent ?: React.ElementType,
  +useExact ?: boolean,
|};

type navItem = {|
  +value: string,
  +to ?: string,
  +icon ?: string,
  +active ?: boolean,
  +LinkComponent ?: React.ElementType,
  +subItems ?: Array < subNavItem >,
  +useExact ?: boolean,
|};

const navBarItems: Array<navItem> = [
  {
    value: "Trang chủ",
    to: "/",
    icon: "home",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Phổ biến",
    icon: "globe",
    to: "/populars",
    LinkComponent: withRouter(NavLink),
    useExact: true,
    /* subItems: [
      {
        value: "Cards Design",
        to: "/cards",
        LinkComponent: withRouter(NavLink),
      },
      { value: "Charts", to: "/charts", LinkComponent: withRouter(NavLink) },
      {
        value: "Pricing Cards",
        to: "/pricing-cards",
        LinkComponent: withRouter(NavLink),
      },
    ], */
  }/* ,
  {
    value: "Coronavirus",
    icon: "shield",
    subItems: [
      { value: "Maps", to: "/maps", LinkComponent: withRouter(NavLink) },
      { value: "Icons", to: "/icons", LinkComponent: withRouter(NavLink) },
      { value: "Store", to: "/store", LinkComponent: withRouter(NavLink) },
      { value: "Blog", to: "/blog", LinkComponent: withRouter(NavLink) },
    ],
  } */
];

const accountDropdownPropsFunc = (user)=>(user)?{
  avatarURL: "https://s120-ava-talk.zadn.vn/4/c/d/3/0/120/09f385d32d7677e9ff00099536a7d200.jpg",
  name: user.name,
  description: "Quận 9, Tp. Hcm",
  options: [
    { icon: "user", value: "Profile" },
    { icon: "settings", value: "Settings" },
    { icon: "mail", value: "Inbox", badge: "6" },
    { icon: "send", value: "Message" },
    { isDivider: true },
    { icon: "log-out", value: "Sign out" },
  ],
}:{
  avatarURL: "./images/default_avatar.jpg",
  name: "Đăng nhập",
  options: [
    { icon: "user", value: "Login", to: "/login", LinkComponent: withRouter(NavLink) },
    { isDivider: true },
    { icon: "user-plus", value: "Register",to: "/register", LinkComponent: withRouter(NavLink) },
  ]
};

const formProps = {

};

class SiteWrapper extends React.Component<Props, State> {

  constructor(props) {
    super(props);
  }
  state = {
    notificationsObjects: [
      {
        unread: true,
        avatarURL: "demo/faces/male/41.jpg",
        message: (
          <React.Fragment>
            Hello1
          </React.Fragment>
        ),
        time: "10 minutes ago",
      },
      {
        unread: true,
        avatarURL: "demo/faces/female/1.jpg",
        message: (
          <React.Fragment>
            hello 2
          </React.Fragment>
        ),
        time: "1 hour ago",
      },
      {
        unread: false,
        avatarURL: "demo/faces/female/18.jpg",
        message: (
          <React.Fragment>
            hello3
          </React.Fragment>
        ),
        time: "2 hours ago",
      },
    ],
  };

  render(): React.Node {
    const {dispatch, isFetching, currentUser } = this.props;
    
    
    const notificationsObjects = this.state.notificationsObjects || [];
    const unreadCount = this.state.notificationsObjects.reduce(
      (a, v) => a || v.unread,
      false
    );

    let footerProps;
    if (this.props.showFooter)
      footerProps = {
        /*     links: [
              <a href="#">First Link</a>,
              <a href="#">Second Link</a>,
              <a href="#">Third Link</a>,
              <a href="#">Fourth Link</a>,
              <a href="#">Five Link</a>,
              <a href="#">Sixth Link</a>,
              <a href="#">Seventh Link</a>,
              <a href="#">Eigth Link</a>,
            ], */
        /*  note:
           "Trang thuộc bản quyền Ali-Kit", */
        copyright: (
          <React.Fragment>
            Copyright © 2020
            <a href="."> Ali-Kit</a>
          </React.Fragment>
        ),
        /*      nav: (
               <React.Fragment>
                 <Grid.Col auto={true}>
                   <List className="list-inline list-inline-dots mb-0">
                     <List.Item className="list-inline-item">
                       <a href="./docs/index.html">Documentation</a>
                     </List.Item>
                     <List.Item className="list-inline-item">
                       <a href="./faq.html">FAQ</a>
                     </List.Item>
                   </List>
                 </Grid.Col>
               </React.Fragment>
             ), */
      }

    return (
      <InnerSiteWrapper
        headerProps={{
          href: "/",
          alt: "Tin dia phuong",
          imageURL: "./images/local_news.svg",
          title: "Tin địa phương",
          description: "Quận 9",

          notificationsTray: {
            notificationsObjects,
            markAllAsRead: () =>
              this.setState(
                () => ({
                  notificationsObjects: this.state.notificationsObjects.map(
                    v => ({ ...v, unread: false })
                  ),
                }),
                () =>
                  setTimeout(
                    () =>
                      this.setState({
                        notificationsObjects: this.state.notificationsObjects.map(
                          v => ({ ...v, unread: true })
                        ),
                      }),
                    5000
                  )
              ),
            unread: unreadCount,
          },
          accountDropdown: accountDropdownPropsFunc(currentUser),

        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={footerProps}
      >
        {this.props.children}
      </InnerSiteWrapper>
    );
  }
}

export default SiteWrapper;