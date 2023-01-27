import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <ul className="social-icon">
                        <a href="www.facebook.com">Fb</a>
                        <a href="www.twitter.com">Tw</a><a href="www.gmail.com">G+
                            </a>
                            <a href="www.instagram.com">In</a>
                    </ul>
                </div>
                <div className="col-md-12">
                    <p>&copy; {new Date().getFullYear()} Dinesh. Powered with 💙 by <span>me.</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer