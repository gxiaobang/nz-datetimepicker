/**
 * 测试日历
 */

import { DatePicker } from './datePicker';

new DatePicker('#datePicker', { fmt: 'yyyy-MM-dd' })
	.on('picked', function() {
		console.log('picked事件触发');
	});