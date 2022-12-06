// this loads the data for a user's gardening hardiness zone

function ZoneAPI(num) {
  if (num < 3) {
    <div>
      Sorry, we don't have any information about your zone! It's just too cold
      (or not in existence).
    </div>;
  }
  if (num === 3) {
    return (
      <div>
        Zone 3 is the coldest of all the USDA garden zones in the United States.
        This zone has the shortest growing window for gardening. With a last
        frost date of May 15th and first frost date of September 15. These dates
        will vary a week or two so it is important to watch the weather before
        planting. Annual minimum temperature for zone 3 is -30ºF.
        <div>
          Average First Frost: <b>September 1-30</b>
        </div>
        <div>
          Average Last Frost: <b>May 1-31</b>
        </div>
      </div>
    );
  }
  if (num === 4) {
    return (
      <div>
        Zone 4 has shorter growing season than most USDA garden zones in the
        United States. Choose vegetable varieties with faster maturing dates.
        With a last date of June 1st and first frost date of October 1st, these
        dates will vary a week or two so it is important to watch the weather
        before planting. Annual minimum temperature for zone 4 is -30ºF.
        <div>
          Average First Frost: <b>September 1-30</b>
        </div>
        <div>
          Average Last Frost: <b>May 1-31</b>
        </div>
      </div>
    );
  }
  if (num === 5) {
    return (
      <div>
        Zone 5 has medium length growing season. Most vegetable varieties will
        have no problem maturing before your first frost date. With a last frost
        date of May 15th and first frost date of October 15th. These dates will
        vary a week or two so it is important to watch the weather before
        planting. Annual minimum temperature for zone 5 is -15ºF.
        <div>
          Average First Frost: <b>September 30-October 30</b>
        </div>
        <div>
          Average Last Frost: <b>March 30-April 30</b>
        </div>
      </div>
    );
  }
  if (num === 6) {
    return (
      <div>
        Zone 6 has medium length growing season. Most vegetable varieties will
        have no problem maturing before your first frost date. With a last frost
        date of May 1st and first frost date of November 1st. These dates will
        vary a week or two so it is important to watch the weather before
        planting. Annual minimum temperature for zone 6 is -5ºF.
        <div>
          Average First Frost: <b>September 30-October 30</b>
        </div>
        <div>
          Average Last Frost: <b>March 30-April 30</b>
        </div>
      </div>
    );
  }
  if (num === 7) {
    return (
      <div>
        Zone 7 has medium length growing season. Most vegetable varieties will
        have no problem maturing before your first frost date. With a last frost
        date of April 15th and first frost date of November 15th. This gives you
        7 months of gardening time! These dates will vary a week or two so it is
        important to watch the weather before planting. Annual minimum
        temperature for zone 7 is 5ºF.
        <div>
          Average First Frost: <b>September 30-October 30</b>
        </div>
        <div>
          Average Last Frost: <b>March 30-April 30</b>
        </div>
      </div>
    );
  }
  if (num === 8) {
    return (
      <div>
        Zone 8 has a long growing season with hot summers. Most vegetable
        varieties will have no problem maturing before your first frost date.
        With a last frost date of April 1st and first frost date of December
        1st. These dates will vary a week or two so it is important to watch the
        weather before planting. Annual minimum temperature for zone 8 is 15ºF.
        <div>
          Average First Frost: <b>October 30-November 10</b>
        </div>
        <div>
          Average Last Frost: <b>February 22-March 30</b>
        </div>
      </div>
    );
  }
  if (num === 9) {
    return (
      <div>
        Zone 9 has a long growing season with hot summers. Most vegetable
        varieties will have no problem maturing before your first frost date.
        With a last frost date of March 1st and first frost date of December
        15th. These dates will vary a week or two so it is important to watch
        the weather before planting. Annual minimum temperature for zone 9 is
        25ºF.
        <div>
          Average First Frost: <b>November 30-December 10</b>
        </div>
        <div>
          Average Last Frost: <b>January 30-February 28</b>
        </div>
      </div>
    );
  }
  if (num === 10) {
    return (
      <div>
        Unlike the coldest zones of the country, Zone 10 represents mild
        climates characterized by warm temperatures and high humidity. The
        average minimum winter temperature in Zone 10 is 30-45ºF, making it
        ideal for winter gardening.
        <div>
          Average First Frost: <b>November 30-December 30</b>
        </div>
        <div>
          Average Last Frost: <b>January 30 or earlier</b>
        </div>
      </div>
    );
  }
}

export default ZoneAPI;
