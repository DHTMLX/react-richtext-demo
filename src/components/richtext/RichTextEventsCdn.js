import React, { Component } from "react";
import fromCDN from "from-cdn";

const eventsArray = ["change", "action", "selectionChange", "selectionRefresh"];

class RichTextEventsCdn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      events: [],
    };

    this.ready = fromCDN(["https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js", "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css"]);
  }

  componentDidMount() {
    this.ready.then(() => {
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext("richtext");

      eventsArray.forEach(event => {
        this.richtext.events.on(event, (...args) => {
          args = args.map(item => JSON.stringify(item));
          const eventItem = [{ id: Math.random(), name: event, value: `${args}` }];
          this.setState(state => {
            const events = state.events.concat(eventItem);
            return {
              events,
              isEmpty: false,
            };
          });
        });
      });
    });
  }

  componentWillUnmount() {
    this.richtext && this.richtext.destructor();
  }

  clearAll() {
    this.setState(state => ({
      events: [],
      isEmpty: true,
    }));
  }

  render() {
    const isEmpty = this.state.isEmpty;
    return (
      <div className="dhx-container_inner events">
        <div className="dhx_sample-container__widget" id="richtext"></div>
        <div className="dhx_sample-container__sidebar">
          <div className="events-list--element" style={isEmpty ? {} : { display: "none" }}>
            No events yet
          </div>
          <div className="events-list--element dhx_sample-event" style={isEmpty ? { display: "none" } : {}}>
            {this.state.events.map(item => (
              <p key={item.id}>
                {item.name}: {item.value}
              </p>
            ))}
          </div>
        </div>
        <section className="dhx_sample-controls">
          <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={() => this.clearAll()}>
            Clear events
          </button>
        </section>
      </div>
    );
  }
}

export default RichTextEventsCdn;
