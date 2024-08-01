import React from 'react';
import styles from "@/styles/imageofcode.module.css"

const CodeBlock = () => {
    const codeString = `
public static int Calculate(string digits)
{
    //Issue: x is 6 should be 5
    var x = digits.Where(char.IsDigit).Count();

    var sumOfDigits = digits.Where(char.IsDigit)
    .Reverse()
        .Select((e, i) => int.Parse(e.ToString()) * (i % 2 == 0 ? 1 : 2))
        .Sum(e => e / 10 + e % 10);

    //Error: sumOfDigits is returning 100 should be 600
    return sumOfDigits % 10;
}`;

    return (
        <pre className={styles.precode}>
            <code dangerouslySetInnerHTML={{ __html: codeString }} className={styles.code} />
        </pre>
    );
};

export default CodeBlock;
