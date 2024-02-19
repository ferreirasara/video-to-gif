import { Avatar, Dropdown, MenuProps } from "antd";

export default function UserButton() {
  const items: MenuProps['items'] = [
    {
      key: 'logout',
      label: 'Logout'
    }
  ]

  return <Dropdown
    menu={{ items }}
  >
    <Avatar />
  </Dropdown>
}