import React from 'react';

class Accordion extends React.Component {
    constructor(props) {
        super(props)
        this.handleCollapse = this.handleCollapse.bind(this)
        this.state = {}
    }

    handleCollapse(tabId) {
        console.log(tabId);
        this.setState({
          [tabId]: !this.state[tabId]
        })
    }

    render() {
        return (
            <div className="accordion">
                {this.props.tabList.map((tab, i) => 
                <div className="tab">
                    <button className="iconBtn" onClick={() => this.handleCollapse('tab'+i)}>
                        {tab.title}
                    </button>
                    <div className={this.state.['tab'+i] ? 'hide' : 'show'}>{tab.body}</div>
                </div>
                )}
            </div>
        );
    }
}

export default Accordion;