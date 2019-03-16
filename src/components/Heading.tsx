import * as React from "react";
import './Heading.css';

export default class Heading extends React.Component<{}> {
    public render() {
        return (
            <div className="outer">
                <div className="anim">
                    <div/>
                </div>

                <div className="text">
                    <div>SHYFT HAPPENS</div>
                </div>
            </div>
        );
    }
}