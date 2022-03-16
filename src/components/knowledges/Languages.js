import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class Languages extends Component {

    state = {
        languages : [
            {id: 1, value: "Javascript", xp: 1.8},
            {id: 1, value: "Html5/Css3", xp: 2},
            {id: 1, value: "Php", xp: 1},
            {id: 1, value: "Javascript", xp: 1.8}
        ],

        frameworks : [
            {id: 1, value: "React", xp: 1},
            {id: 1, value: "Bootstrap", xp: 2},
            {id: 1, value: "Sass", xp: 0.5},
            {id: 1, value: "Material UI", xp: 1}
        ]
    }

    render() {

        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languageDisplay"
                    title="languages"
                />

                <ProgressBar 
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="frameworks & bibliothèques"
                />
            </div>
        )
    }
}

