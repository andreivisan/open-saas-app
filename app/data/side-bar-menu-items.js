import { FiHome, FiSettings } from 'react-icons/fi';
import { SlNotebook } from "react-icons/sl";
import { MdOutlineTranscribe } from "react-icons/md";

const SideBarMenuItems = [
  {
    icon: <FiHome size={24} />,
    name: 'Home',
    route: '/dashboard',
  },
  {
    icon: <SlNotebook size={24} />,
    name: 'My Posts',
    route: '/dashboard/my-posts',
  },
  {
    icon: <MdOutlineTranscribe size={24} />,
    name: 'Create Post',
    route: '/dashboard/create-post',
  },
  {
    icon: <FiSettings size={24} />,
    name: 'Account',
    route: '/dashboard/account-settings',
  },
];

export default SideBarMenuItems;