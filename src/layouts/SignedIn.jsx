import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
       <Menu.Item>
        <Image avatar spaced = "right" src = "https://i.pinimg.com/736x/3c/a3/fe/3ca3fe6666a287b337aa2e4475e1f1f1.jpg"/>
        <Dropdown pointing = "top left" text = "Helin">
            <Dropdown.Menu>
                <Dropdown.Item text = "Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={signOut} text = "Çıkış yap " icon="sign-out"/>
            </Dropdown.Menu>
        </Dropdown>
       </Menu.Item>
    </div>
  )
}
