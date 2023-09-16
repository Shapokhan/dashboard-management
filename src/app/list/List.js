import styles from './list.module.css';
import Sidebar from '@/components/sidebar/sidebar';
import Navbar from '@/components/navbar/navbar';
import Datatable from '@/components/datatable/datatable';

const List = () => {
  return (
    <div className={styles.list}>
      <Sidebar />

      <div className={styles.listContainer}>
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List