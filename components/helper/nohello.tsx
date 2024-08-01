import { useState, useEffect } from 'react';
import styles from "@/styles/nohello.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function NoHello() {
    return (
        <iframe className='fulliframe nohello' scrolling="yes" title="noHello" src="https://www.nohello.net/en/"></iframe>
    )
}