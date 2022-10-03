import { Component } from "react";
import "./style.css";

class Carts extends Component {
  constructor() {
    super();
    this.state = {
      array: [
        {
          text: 1,
          unmountedCount: 0,
          isMounted: false,
        },
        {
          text: 2,
          unmountedCount: 0,
          isMounted: false,
        },
        {
          text: 3,
          unmountedCount: 0,
          isMounted: false,
        },
        {
          text: 4,
          unmountedCount: 0,
          isMounted: false,
        },
        {
          text: 5,
          unmountedCount: 0,
          isMounted: false,
        },
        {
          text: 6,
          unmountedCount: 0,
          isMounted: false,
        },
      ],
      reportArray: [],
    };
  }

  render() {
    return (
      <div className="all_page_wrapper">
        <div className="main_wrapper">
          <div className="cards_wrapper">
            {this.state.array.map(({ text, isMounted }, index) => (
              <div key={index} className="current_item">
                {isMounted ? (
                  <p>{text}</p>
                ) : (
                  <button
                    onClick={() => {
                      this.setState((prev) => ({
                        array: prev.array.map((item, arrayIndex) => {
                          if (arrayIndex === index) {
                            return {
                              ...item,
                              isMounted: true,
                              unmountedCount: item.unmountedCount + 1,
                            };
                          }
                          return item;
                        }),
                      }));
                    }}
                    className="open_button"
                  >
                    Open Card
                  </button>
                )}
                {isMounted && (
                  <button
                    className="close_button"
                    onClick={() => {
                      this.setState((prev) => ({
                        array: prev.array.map((item, arrayIndex) => {
                          if (arrayIndex === index) {
                            return {
                              ...item,
                              isMounted: false,
                            };
                          }
                          return item;
                        }),
                      }));
                    }}
                  >
                    X
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            className="report_button"
            onClick={() => {
              this.setState((prev) => ({
                ...prev,
                reportArray: prev.array.map((item) => item),
              }));
            }}
          >
            Get Report
          </button>
          <div className="report_wrapper">
            {this.state.reportArray.map(({ text, unmountedCount }) => (
              <div className="report_item">{`${text}-${unmountedCount}`}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Carts;
