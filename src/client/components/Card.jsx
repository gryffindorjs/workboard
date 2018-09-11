import React from 'react';

const trellocardwrapper = {
  color: '#4d4d4d',
  textDecoration: 'none'
};

const trellocard = {
  borderRadius: '4px',
  padding: '8px',
  margin: '0 auto 10px',

  color: '#4d4d4d',
  border: '1px solid rgba(0,0,0, .5)',
  // backgroundColor: 'rgb(0, 121, 191)',
  font: '14px "Helvetica Neue",Arial,Helvetica,sans-serif',
  minwidth: '240px',
  maxWidth: '316px',
  lineHeight: '18px'
};

export default class Card extends React.Component {
  render() {
    return (
      <a className="trello-card-wrapper" href="#" style={trellocardwrapper}>
        <div className="trello-card" style={trellocard}>
          <div className="trello-card--content">
            <div className="trello-card--labels">
              <span
                className="trello-card--labels-text trello-card--labels-text__green"
                title="test"
              >
                test
              </span>
            </div>

            <div className="trello-card--title">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              (5)[5]
            </div>
            <div className="trello-card--badges">
              <div>Comments</div>
              <div>Attachments</div>
              <div>Checklist</div>
            </div>
            <div className="trello-card--members">
              <ul>
                <li>
                  <div className="trello-card--member">
                    <img src="https://trello-avatars.s3.amazonaws.com/e84bd5ae16effe6d9842563f7e41d93d/50.png" />
                  </div>
                </li>
                <li>
                  <div className="trello-card--member">
                    <img src="https://trello-avatars.s3.amazonaws.com/e84bd5ae16effe6d9842563f7e41d93d/50.png" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="trello-card--board-title">
            hello-world: #upcoming Sprint
          </div>
        </div>
      </a>
    );
  }
}
