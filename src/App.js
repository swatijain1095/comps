import Button from "./Button";

function App() {
    return (
        <div>
            <div>
            <Button success rounded outline>Click me!</Button>
            </div>
            <div>
            <Button danger outline>Buy Now</Button>
            </div>
            <div>
            <Button warning>See Deals</Button>
            </div>
            <div>
            <Button secondary outline>Hide Ads</Button>
            </div>
            <div>
            <Button primary rounded>Something New</Button>
            </div>
        </div>
        );
}

export default App;