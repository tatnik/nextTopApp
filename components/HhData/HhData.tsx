import { Card } from '../Card/Card';
import { Ptag } from '../Ptag/Ptag';
import styles from './HhData.module.css';
import { HhDataProps } from './HhData.props';
import RateIcon from '@/public/icons/star.svg';
import cn from 'classnames';

export const HhData = (props: HhDataProps): JSX.Element => {
  const { count, juniorSalary, middleSalary, seniorSalary } = props;

  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div>
          <Ptag className={styles.hhTitle}>Всего вакансий</Ptag>
          <Ptag
            size={'xxl'}
            className={styles.countValue}
          >
            {count}
          </Ptag>
        </div>
      </Card>

      <Card className={styles.salary}>
        <div>
          <Ptag className={styles.hhTitle}>Начальный</Ptag>
          <Ptag
            size={'xl'}
            className={styles.salaryValue}
          >
            {juniorSalary}
          </Ptag>

          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>

        <div>
          <Ptag className={styles.hhTitle}>Средний</Ptag>
          <Ptag
            size={'xl'}
            className={styles.salaryValue}
          >
            {middleSalary}
          </Ptag>

          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon />
          </div>
        </div>

        <div>
          <Ptag className={styles.hhTitle}>Профессионал</Ptag>
          <Ptag
            size={'xl'}
            className={styles.salaryValue}
          >
            {seniorSalary}
          </Ptag>

          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
