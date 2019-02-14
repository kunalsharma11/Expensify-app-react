import moment from 'moment';

//timestamps(in milisec) starts from jan 1 1970

//get visible expenses

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
       // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
       // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
       //using query methods for moments
       const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
       const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        //use same as string.contains in java for text

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};