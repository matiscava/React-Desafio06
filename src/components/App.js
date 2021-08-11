import React from "react";
import ListItems from "./ListItems";
import NavBar from "./NavBar";


class App extends React.Component{
    render(){
        return (
            <div>
                <NavBar />
                <ListItems>
                    
                </ListItems>
            </div>
        )
    }
}

export default App;
