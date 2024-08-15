def to_industrial(time):
    if isinstance(time, str):
        hours, minutes = map(int, time.split(":"))
        
        # Normalize the time if minutes are 60 or more
        extra_hours, minutes = divmod(minutes, 60)
        hours += extra_hours
        
        total_minutes = hours * 60 + minutes
    else:
        total_minutes = time
    
    decimal_hours = total_minutes / 60
    return round(decimal_hours, 2)

def to_normal(time):
    hours = int(time)
    decimal_minutes = (time - hours) * 60
    minutes = round(decimal_minutes)
    
    # Normalize the time if minutes are 60 or more
    if minutes >= 60:
        hours += minutes // 60
        minutes %= 60
    
    return f"{hours}:{minutes:02d}"
