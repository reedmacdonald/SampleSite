import './styles.css'

const players=['red','blue','green','yellow','purple','orange','red','blue','green','yellow','purple','orange','red','blue','green','yellow','purple','orange','red','blue','green','yellow','purple','orange'];

export const PageThree = () => {
    return (
        <div className="PageThree">
        <h1>PageThree</h1>
        {players.map((player,index)=>{
            return <div key={index} className={`box ${player}`}></div>
        })}
        </div>
    );
};