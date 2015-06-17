function Timer (idField, increments, hour, min, sec) {
	increments = typeof increments !== 'undefined' ? increments : false;
	hour = typeof hour !== 'undefined' ? hour : 0;
	min = typeof min !== 'undefined' ? min : 0;
	sec = typeof sec !== 'undefined' ? sec : 0;

	this.field = $(idField);
	this.hour = hour;
	this.min = min;
	this.sec = sec;

	// Methods

	this.setHour = function(hour) {
		this.hour = hour;
	};
	this.setMin = function(min) {
		this.min = min;
	};
	this.setSec = function(sec) {
		this.sec = sec;
	};
	
	this.timeDown = function() {
		this.sec--;
		if (this.sec < 0){
			this.min--;
			this.sec = 60;
		}
		if (this.min < 0){
			this.hour--;
			this.min = 60;
		}
	};
	this.timeUp = function() {
		this.sec++;
		if (this.sec >= 60){
			this.min++;
			this.sec = 0;
		}
		if (this.min >= 60){
			this.hour++;
			this.min = 0;
		}
	};

	//update time and display
	this.update = function() {
		//console.log(this);
		if (increments)
			this.timeUp();
		else
			this.timeDown();

	   	this.field.text(this.hour + ":" + this.min + ":" + this.sec);
	};
}