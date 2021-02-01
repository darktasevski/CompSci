# Date-time shenanigans

## UTC offsets go from -12 to +12. Wrong

Turns out, UTC offsets span from -12 to **+14**. That's gives us 27 hours UTC can be offset by including zero offset.

How does it work? UTC-12 has the same time as UTC+12, but is one day behind. Same goes for UTC-11 and UTC+13, etc.

Why that crazy range? That was a result of pacific islanders decided they wanted to be on a specific side of the international date line.

It makes for a very jagged international date line:

![УТЦ дате лине](../static/utc_date_line.png)

## Every UTC offset corresponds to exactly one time zone. Wrong

Here are some distinct time zones which are all at UTC+5:

-   Mawson Time
-   Maldives Time
-   Oral Time
-   Pakistan Standard Time
-   French Southern and Antarctic Time
-   Tajikistan Time
-   Turkmenistan Time
-   Uzbekistan Time
-   Yekaterinburg Time

You might be wondering: if they're all at the same UTC offset, why couldn't all those countries just use the same time zone? Perhaps Pakistanis weren't keen about being on Yekaterinburg Time.

## There are more countries in the world than time zones. Wrong

How could this one possibly be wrong? Well...

-   Many countries want their very own time zone (how many do you think run on Myanmar Time?)
-   Some countries split themselves up into multiple time zones (e.g. eastern and western times)
-   Military time alone uses 25 time zones, one for each hour from UTC-12 to UTC+12
-   DST

All together, there are 244 time zones used by the 195 countries in the world.

## Time zones are always offset from UTC by an integer number of hours. Wrong

India standard time is five and a half hours off of UTC.

> Nepal likes to be at the 45 minute UTC offset. Why does that extra 15 minutes matter so much to them? Because they really want their mountain to have the sun right above it at noon.

## A country stays at the same UTC offset all year long. Wrong

Don't forget about Daylight Saving Time! Or as the Europeans call it "Summer Time."

Countries practicing DST change their UTC offset twice every year.

## There is a standard format for declaring time zones. Wrong

Here are some standards I discovered, there may be more:

-   **Common name** - These are the traditional time zone names we're used to such as Pacific Standard Time.
-   **[IANA zone keys](https://www.iana.org/time-zones)** - This is as close to the official standard as you can get.
-   **Prominent city based** - America/New_York and similar
-   **GPS Coordinates** - Many APIs for getting a region's UTC offset only want a UTC time and latitude/longitude coordinates. This lets them define any moment unambiguously and not have to worry about Daylight Saving Time.
-   **Raw UTC offset** - W3's international standard gave up on the notion of time zones and declared that engineers should only store a timestamp's raw UTC offset.

The only sane definition of what a timezone is, is a region of the world that shares a common history of civil time. And this is what a proper IANA timezone is, with differences in civil time before 1970 are disregarded.

Incidentally, IANA database has a EST timezone, but it's deprecated and actually doesn't describe the history of civil time anywhere.

## Daylight Saving Time starts at the same time every year. Wrong

Each country choose when to start it's own DST...

## A country stays in the same time zone during Daylight Saving Time. Wrong

Funny thing about DST, it doesn't actually change the time zone's UTC offset. Instead, Daylight Saving Time countries switch to a different time zone, with a different name.

For example:

Texas goes from Central Standard Time to Central Daylight Time.

Chile goes from Chile Standard Time to Chile Summer Time

## Your time zone library can recognize any time zone. Wrong

Remember all those different potential time zone names and formats? Most libraries will only support one.

And they might be limited by the time zones installed on your local machine.

## 0: There's a designated time zone for every location in the world. Wrong

The north and south poles have no official time zone. Researchers there just follow their own country's time.

## 1: You can solve your problems by saving the time as UTC. Wrong

Saving time as UTC only works reliably if the time is in the past. If you save the time in the future, you run into a problem you don't think is related to an UTC time stamp: Governments. See, some countries decide to stop doing DST switching in the future. Some countries decide to start doing DST in the future (or start doing it again). If this happens, you need to update all timestamps that are in the future and are in the abolished/introduced time zone. You can only do this if you know the time zone of the timestamps you save, which gets lost if you store them in UTC.

## References

1.  Reddit discussion, Falsehoods programmers believe about Time Zones, [reddit.com](https://www.reddit.com/r/programming/comments/jggx3l/falsehoods_programmers_believe_about_time_zones/)
2.  Zain Rizvi, Falsehoods programmers believe about Time Zones, [zainrizvi.io](https://www.zainrizvi.io/blog/falsehoods-programmers-believe-about-time-zones/)
3.  Computerphile, The Problem with Time & Timezones, [youtube.com](https://youtu.be/-5wpm-gesOY)
