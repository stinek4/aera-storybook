import {
  Calendar as AriaCalendar,
  CalendarCell,
  CalendarGrid,
  CalendarProps as AriaCalendarProps,
  DateValue,
  Heading,
  Text
} from 'react-aria-components';

import { Button } from '../button/Button';
import './Calendar.css';
import React from 'react';

export interface CalendarProps<T extends DateValue>
  extends AriaCalendarProps<T> {
  errorMessage?: string;
}

const Calendar = (
  { errorMessage, ...props }: CalendarProps<DateValue>
) => {
  return (
    <AriaCalendar {...props}>
      <header>
        <Button label='◀'/>
        <Heading />
        <Button label='▶'/>
      </header>
      <CalendarGrid>
        {(date) => <CalendarCell date={date} />}
      </CalendarGrid>
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </AriaCalendar>
  );
}

export {Calendar};