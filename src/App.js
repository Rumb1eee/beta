import React, { useState, useEffect, useRef } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { ConfigProvider, AdaptivityProvider, AppRoot, View, Panel, Div, PanelHeader, Button } from '@vkontakte/vkui/dist/';
import '@vkontakte/vkui/dist/vkui.css';

import Icon36LogoVk from '@vkontakte/icons/dist/36/logo_vk';
import Icon28Play from '@vkontakte/icons/dist/28/play';
import Icon28MoreHorizontal from '@vkontakte/icons/dist/28/more_horizontal';
import Icon24Linked from '@vkontakte/icons/dist/24/linked';


const App = () => {

const [activePanel, setActivePanel] = useState('main');

useEffect(() => {
bridge.send("VKWebAppShowNativeAds", { ad_format: "preloader" })
}, []);

return (
<ConfigProvider>
<AdaptivityProvider>
<AppRoot>
<View activePanel={activePanel}>

<Panel id='main'>
<PanelHeader>Реклама: For Duzive </PanelHeader>

<Div>
<Button size='l' stretched style={{ marginLeft:'20px', marginRight: 10, color:'white', width:'90%', paddingTop:'0.5%', paddingBottom:'0.5%', backgroundColor:'#F44336' }} onClick={() => bridge.send("VKWebAppShowNativeAds", { ad_format: "reward" })}>Смотреть рекламу</Button>
</Div>
<Div>
<Button size='l' stretched style={{ marginLeft:'20px', marginRight: 10, color:'white', width:'90%', paddingTop:'0.5%', paddingBottom:'0.5%', backgroundColor:'#3300FF' }} onClick={() => bridge.send("VKWebAppShowNativeAds", { ad_format: "preloader" })}>Смотреть баннер</Button>
</Div>
</Panel>

</View>
</AppRoot>
</AdaptivityProvider>
</ConfigProvider>
);
}

export default App;