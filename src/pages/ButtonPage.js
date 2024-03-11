import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage() {

    const handleClick = () => {
    };

    return (
        <div>
            <div>
            <Button success rounded outline className="mb-5" onClick={handleClick}>
                <GoBell />
                Click me!
            </Button>
            </div>
            <div>
            <Button danger outline>
                <GoCloud />
                Buy Now
            </Button>
            </div>
            <div>
            <Button warning>
                <GoDatabase />
                See Deals
            </Button>
            </div>
            <div>
            <Button secondary outline>
                Hide Ads
            </Button>
            </div>
            <div>
            <Button primary rounded>
                Something New
            </Button>
            </div>
        </div>
        );
}

export default ButtonPage;