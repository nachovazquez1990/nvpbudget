import React from "react";

import Item from './item/Item';
import Results from '../results/Results';
import './Features.css';

class Features extends React.Component {

    state = {
        items: [],
        time: 0,
        rate: 30
    }
    rateUp = () => {
        let rate = this.state.rate;
        rate = rate + 1;
        this.setState({ rate: rate });
    }
    rateDown = () => {
        let rate = this.state.rate;
        rate = rate - 1;
        this.setState({ rate: rate });
    }
    addItem = (event) => {
        event.preventDefault();
        let newItem = {
            id: event.target.id.value,
            feature: event.target.feature.value,
            description: event.target.description.value,
            status: event.target.status.value,
            duration: event.target.duration.value
        }
        const items = [...this.state.items];
        items.push(newItem);
        this.setState({ items: items });

        let time = this.state.time;
        time = time + parseInt(newItem.duration);
        this.setState({ time: time });
    }
    deleteItem = (itemIndex) => {
        const items = [...this.state.items];
        let selectedDuration = items[itemIndex].duration;
        items.splice(itemIndex, 1);
        this.setState({ items: items });

        let time = this.state.time;
        time = time - parseInt(selectedDuration);
        this.setState({ time: time });
    }

    render() {
        return (
            <div className="container">
                <div className="features">
                    <form onSubmit={this.addItem}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.items.map((items, index) => {
                                    return <Item
                                        feature={items.feature}
                                        description={items.description}
                                        status={items.status}
                                        duration={items.duration}

                                        key={items.id}
                                        deleteItem={() => this.deleteItem(index)}
                                    />
                                })}

                                <tr className="feature_form">
                                    <td>
                                        <input type="text" name="feature" placeholder="new feature" required />
                                    </td>
                                    <td>
                                        <input type="text" name="description" placeholder="description" />
                                    </td>
                                    <td>new</td>
                                    <td>
                                        <input type="number" name="duration" defaultValue="1" required />
                                    </td>
                                    <td>
                                        <input type="hidden" name="status" defaultValue="onhold" />
                                        <input type="hidden" name="id" value={this.state.items.length + 1} />
                                        <input type="submit" value="+" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

                <Results
                    time={this.state.time}
                    rate={this.state.rate}
                    rateUp={() => this.rateUp()}
                    rateDown={() => this.rateDown()}
                />
            </div>
        );
    }
}

export default Features;