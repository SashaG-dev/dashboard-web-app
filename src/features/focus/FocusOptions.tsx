import { ChangeEvent } from 'react';
import { LabelBottom } from '../../components/Label';
import Select from '../../components/Select/Select';
import { FOCUS_HOURS, FOCUS_MINUTES_SECONDS } from '../../utils/constants';
import { TimerType } from '../../store/slices/focusSlice';

type OptionsPropType = {
  focus: TimerType;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const FocusOptions = ({ focus, onChange }: OptionsPropType) => {
  return (
    <div className="edit-container">
      <LabelBottom htmlFor="hours" label="hours">
        <Select
          options={FOCUS_HOURS}
          id="hours"
          name="hours"
          title="set hours"
          onChange={onChange}
          value={focus.hours}
        />
      </LabelBottom>
      <LabelBottom htmlFor="minutes" label="min">
        <Select
          options={FOCUS_MINUTES_SECONDS}
          id="minutes"
          name="minutes"
          title="set minutes"
          value={focus.minutes}
          onChange={onChange}
        />
      </LabelBottom>
      <LabelBottom htmlFor="seconds" label="sec">
        <Select
          options={FOCUS_MINUTES_SECONDS}
          id="seconds"
          name="seconds"
          title="set seconds"
          value={focus.seconds}
          onChange={onChange}
        />
      </LabelBottom>
    </div>
  );
};
export default FocusOptions;
