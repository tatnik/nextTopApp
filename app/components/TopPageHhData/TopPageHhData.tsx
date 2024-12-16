import { priceRu } from '@/helpers/helpers';

import styles from './HhData.module.css';
import { TopPageHhDataProps } from './TopPageHhData.props';
import RateIcon from '@/public/icons/rate.svg';

import { Card, Ptag } from '@/components';

export const TopPageHhData = (props: TopPageHhDataProps): JSX.Element => {
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
            {priceRu(juniorSalary)}
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
            {priceRu(middleSalary)}
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
            {priceRu(seniorSalary)}
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
