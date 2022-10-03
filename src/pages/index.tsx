import Link from 'next/link';
import Image from 'next/image';
import logo from '@/styles/icons/logo.svg';
import { Button } from 'antd';
import styles from '../styles/Home.module.css';

export default function Home() {

  const drawioUrl = '/drawio';

  return (
    <div className={styles.container}>
    
      <div className={styles.btn_container}>
        <Link href={drawioUrl} passHref>
          <Button type="primary" size="large" style={{ width: 120 }}>draw</Button>
        </Link>
      </div>
    </div>
  );
}
