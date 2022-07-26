import React from 'react'
import './Widgets.css'

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://tr.reactjs.org/" //Html 5' de iFrame, bir web sayfasının içerisine farklı bir web sayfasını çağırıp, görüntülememize yardımcı olan bir HTML etiketidir
        width="340"
        height="100%"
        style={{ border: 'none', oweflow: 'hidden' }}
        scrolling="no"
        allowTransparency="true"
        allow="encrypted-media"
        frameborder="0"
      ></iframe>
    </div>
  )
}

export default Widgets
