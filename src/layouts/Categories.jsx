import React from 'react'
import {Menu } from "semantic-ui-react";

export default function Categories() {
    return (
        <div>
        <Menu pointing secondary vertical>
          <Menu.Item name="Ana Sayfa" />
          <Menu.Item name="Kategoriler" />
          <Menu.Item name="İndirimdekiler" />
        </Menu>
      </div>
    );
}
