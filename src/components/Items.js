import React , {Component} from "react";
import "./Items.css";
class Items extends Component{
    render(){
        // const id =this.props.id;
        // const product =this.props.product;
        // const {id , product} = this.props;
        const {items} = this.props;
        const theItems = items.map((item)=>{
            // if(item.count > 1){
            //     return(
            //         <div key={item.id}>
            //             <p>{item.id}</p>
            //             <p>{item.product}</p>
            //             <p>****************</p>
            //         </div>
            //     )
            // } else{
            //     return(
            //         <div>it's not more than one</div>
            //     )
            // }
            return item.count > 1 ?
                (<div className="item" key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.product}</p>
                    <p>****************</p>
                </div>)
            : null;
        })
        return(
            <div>
                {/* <p>Item {id}</p>
                <p>{product}</p> */}
                {theItems}
            </div>
        )
    }
}
export default Items;