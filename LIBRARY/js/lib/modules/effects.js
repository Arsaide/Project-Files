import $ from "../core";

$.prototype.animateOverTime = function(duration, callback, finall) {
    let timeStart;

    function _animateOverTime(time) {
        if(!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / duration, 1);

        callback(complection);

        if(timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if(typeof finall === 'function') {
                finall();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fadeIn = function(duration, display, finall) {
    for(let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block'; // пример старого метода передавания значения по умолчанию

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const anim = this.animateOverTime(duration, _fadeIn, finall);
        requestAnimationFrame(anim);
    }

    return this;
};

$.prototype.fadeOut = function(duration, finall) {
    for(let i = 0; i < this.length; i++) {
        const _fadeOut  = (complection) => {
            this[i].style.opacity = 1 - complection;
            if(complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const anim = this.animateOverTime(duration, _fadeOut, finall);
        requestAnimationFrame(anim);
    }

    return this;
}; 