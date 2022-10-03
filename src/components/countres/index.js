import { Component } from "react";
import COUNTRES from "../../constants/api";
import "./style.css";

class Countres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countres: [],
      filtered: [],
      searchText: "",
    };
  }
  handleInputChange = (e) => {
    this.setState((prevState) => ({
      filtered: prevState.countres.filter(({ name }) => {
        return name.toLowerCase().includes(e.target.value.toLowerCase());
      }),
      searchText: e.target.value,
      selectedFleg: undefined,
    }));
  };
  componentDidMount() {
    this.setState({
      countres: COUNTRES,
      filtered: COUNTRES,
      searchText: "",
      isOpened: false,
      selectedFleg: undefined,
    });
  }

  render() {
    return (
      <div
        className="full_page_wrapper"
        onClick={() => {
          this.setState({ isOpened: false });
        }}
      >
        <div className="dropdown_wrapper">
          <div
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ isOpened: true });
            }}
            className="input_wrapper"
          >
            {this.state.selectedFleg && (
              <img src={this.state.selectedFleg} width={20} height={15} />
            )}
            <input
              onChange={this.handleInputChange}
              value={this.state.searchText}
            />
          </div>
          {this.state.isOpened && (
            <div className="option_wrapper">
              {this.state.filtered.map(({ name, img }, index) => (
                <div
                  className="option_item"
                  onClick={(e) => {
                    e.stopPropagation();
                    this.setState({
                      isOpened: false,
                      selectedFleg: img,
                      searchText: name,
                    });
                  }}
                  key={index}
                >
                  <img src={img} width={20} height={15} />
                  {name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Countres;
