import React from 'react'

function OptionsSettings(props) {

    const {creds, chat} = props

    console.log(creds)
    return (
        <div className="ce-photo-section" style={{borderTop: "1px solid rgb(240, 240, 240)"}}><div style={{borderTop: "1px solid rgb(240 240 240)"}}><div className="ce-section-title-container ce-photo-title-container" style={{cursor: "pointer"},{backgroundColor: 'rgb(255, 255, 255)'}, {transition: "background-color 100ms ease 0s"}}>
            <div style={{fontSize: "17px"}, {padding: '12px'}, {fontWeight: '600'} }  >Options</div><span role="img" aria-label="left" className="anticon anticon-left" style={{float: "right"}, {position: 'relative'},{ bottom: '30px '}, {right: '12px'}, {transform: 'rotate(0deg)'}, {transition: 'transform 100ms ease 0s'}}   >
            <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg></span></div><div></div></div></div>
    )
}

export default OptionsSettings
