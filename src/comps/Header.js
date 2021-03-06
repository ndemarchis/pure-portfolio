import React from "react";
import { SocialIcon } from 'react-social-icons';
import socialData from "../data/socialData";


class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            socials: socialData,
        }
    }
    
    socials = [
        {url: "https://github.com/ndemarchis"}, 
        {url: "https://linkedin.com/in/nickdemarchis"}, 
        {url: "https://medium.com/@nickdemarchis"}, 
        {url: "mailto:ned004@bucknell.edu"},
    ];
    
    socialItems = this.socials.map((item) => ( <SocialIcon key={item.key} url={item.url} bgColor="#00000000" fgColor="#ffffff" style={{ height: 30 }} /> ))
    
    handleClick(e) {
        e.preventDefault();
        this.props.changeStateArr(["#000000","#000000","#000000"]);
        console.log('The link was clicked.');
    }
    
    render() {
        return(
            <div className="headerWrapper"><table width="100%"><tbody><tr>
                <td>
                    <h1 
                        style={{
                            // fontWeight: 100
                        }}
                    >
                        nick deMarchis
                    </h1>
                </td>
                <td className="socials" align="right">
                        <a onClick={this.props.handler} href="javascript:;">😎</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    {this.socialItems}
                </td>
            </tr></tbody></table></div>
        )
    }
}

export default Header