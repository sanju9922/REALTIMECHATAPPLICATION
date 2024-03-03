/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react-refresh/only-export-components
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props)=>{
    
    return (<div style={{height:'100vh'}}>
        <PrettyChatWindow
      projectId="46ecd4a1-aac5-40bb-9b43-a91f09eb0ea5"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}
    />
    </div>)
}

export default ChatsPage;