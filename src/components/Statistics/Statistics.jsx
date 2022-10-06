export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <h2>Statistic</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}% </p>
        </div>
    )
}