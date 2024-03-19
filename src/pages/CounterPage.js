import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

function CounterPage ({ initialCount }) {
    const { count, increament } = useCounter(initialCount);

    return <div>
        <h1>Count is {count}</h1>
        <Button onClick={increament}>Increament</Button>
    </div>
}

export default CounterPage;