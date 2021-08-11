import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];
  // console.log(messages)
  // console.log(userName)
  // console.log(chat)


  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
   
          <div className="message-block">
            {isMyMessage
              ? <MyMessage message={message} />
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

 

  const activeUsersNumber = chat.people.length
  const onlineArr = []



  return (
    <div className="chat-feed">
             <button>logout</button>
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          <h3> {activeUsersNumber === 1? ' 1 person' : activeUsersNumber > 1 ? `${activeUsersNumber} people are in this chat` : null }</h3>
          <div className='flex-container'>
          {chat.people.map((person) => 

          
          {if (person.person.is_online === true )  {
            console.log(person.person)
            onlineArr.push(person.person.username) 
            console.log(onlineArr)  
          }}

      

          )}
     <h3>  {onlineArr.length === activeUsersNumber? 'everyone is active' : onlineArr.length === 1 ? `only ${onlineArr[0]} is active` : `only ${ onlineArr.map((user)=> <h6>{user}</h6> )} are active`   }  </h3>
          </div>
        
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;