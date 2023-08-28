import { HomeIcon,PythonIcon,RIcon,JavaIcon,ScalaIcon, ReleaseIcon, FeedbackIcon } from "../../utils/icons";

const sidenav_menu_data =[{
    "page":"home",
    "title":"Home",
    "path":"/home",
    "special_styling":false,
    "disabled":false,
    "icon":<HomeIcon className="sidebar-icon"/>
},
{
    "page":"python",
    "title":"Python",
    "path":"/pythonlang",
    "special_styling":false,
    "disabled":true,
    "icon":<PythonIcon className="sidebar-icon"/>
},
{
    "page":"R",
    "title":"R",
    "path":"/Rlang",
    "special_styling":false,
    "disabled":true,
    "icon":<RIcon className="sidebar-icon"/>
},
{
    "page":"java",
    "title":"JAVA",
    "path":"/javalang",
    "special_styling":false,
    "disabled":true,
    "icon":<JavaIcon className="sidebar-icon"/>
},
{
    "page":"scala",
    "title":"Scala",
    "path":"/scalalang",
    "special_styling":false,
    "disabled":true,
    "icon":<ScalaIcon className="sidebar-icon"/>
}]

const sidenav_cta_data =[{
    "page":"release",
    "title":"Releases",
    "path":"/release-new",
    "special_styling":false,
    "disabled":true,
    "icon":<ReleaseIcon className="sidebar-icon"/>
},
{
    "page":"feedback",
    "title":"Feedback",
    "path":"/fedback",
    "special_styling":false,
    "disabled":true,
    "icon":<FeedbackIcon className="sidebar-icon"/>
}]
export const sidebar_data={
    "sidebar_main_nav":sidenav_menu_data,
    "sidebar_cta_nav":sidenav_cta_data
};