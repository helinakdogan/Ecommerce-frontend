import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <button class="ui inverted violet button" onClick={signIn}>Giriş yap</button>
            <button class ="ui inverted violet button" style = {{marginLeft: "0.5em"}}>Kayıt ol</button>
            </Menu.Item>

        </div>
    )
} 