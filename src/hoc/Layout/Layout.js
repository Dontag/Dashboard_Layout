import React, { Component } from 'react'
import { Aux } from '../Auxiliary/Auxiliary';

class Layout extends Component {
    render() {
        return (
            <Aux>
                {/* SideDrawer */}
                <main className={classes.Main_Content}>
                    {/* <Header/> */}
                    {this.props.children}
                    {/* <Footer/> */}
                </main>
            </Aux>
        )
    }
}

export default Layout
