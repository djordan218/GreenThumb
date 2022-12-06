-- both test users have the password "password"

INSERT INTO users (username, password, zone, email, is_admin)
VALUES ('testadmin',
        '$2b$12$ARsrVQBHATeA2WJBe0MvdOBXOxo8fcgAXH8NUm5FhTJxcLhWXGw.u',
        7,
        'djordan218@gmail.com',
        TRUE),
       ('testuser',
        '$2b$12$ARsrVQBHATeA2WJBe0MvdOBXOxo8fcgAXH8NUm5FhTJxcLhWXGw.u',
        7,
        'djordan218@gmail.com',
        FALSE);

INSERT INTO crops (name, description, days_to_germ, days_to_harvest, when_to_harvest, img, user_id)
VALUES ('Beets', 'Beets are incredibly nutritious. Both the roots and the leaves are an excellent source of antioxidants, minerals, and vitamin C. They also contain betaine, a compound that is essential for cardiovascular health. Eat them raw, cooked, pickled... You can even make beet chips! Most important, it is very easy to grow beets from seed.', 10, 60, 'In general, the roots are ready to harvest when they are a few inches in diameter, somewhere between a golf ball and a tennis ball size.', '/crop-imgs/beet.jpg', 1),
        ('Bell Peppers', 'Bell pepper plants are short bushes with woody stems that grow brightly colored fruits. The alternating leaves are elliptical, smooth edged, and come to a distinct point.', 18, 60, 'The best way to tell when peppers are ready to pick is to observe changes in color. Almost all pepper varieties will go through a color change during the ripening process. For example, bell peppers change from green to a deep red when fully ripened.', '/crop-imgs/bell-pepper.jpg', 1),
        ('Broccoli', 'Broccoli is a hardy vegetable that develops best during cool seasons of the year. Two crops per year (spring and fall) are possible in most parts of the country, especially with continuous improvement in fast maturity and heat tolerance that extends the life of broccoli through all but the hottest parts of the season.', 14, 70, 'Harvest the main broccoli head when it stops growing. You will know broccoli heads are ready when they are deep green with small, tightly packed buds. Harvest broccoli right away if it starts to flower or turn yellow. Side shoots will continue growing after the main head is harvested.', '/crop-imgs/broccoli.jpg', 1),
        ('Cabbage', 'All forms of cabbage have succulent leaves that are free of hairs and covered with a waxy coating, which often gives the leaf surface a gray-green or blue-green colour. The plants grow best in mild to cool climates and tolerate frost; some forms tolerate hard freezing at certain periods of growth.', 14, 80,'Harvest when heads reach desired size and are firm. Mature heads left on the stem may split. Days to maturity is around 70-100 days for most green cabbage varieties and most produce 1 to 3 pound heads.', '/crop-imgs/cabbage.jpg', 1),
        ('Canteloupe', 'A cantaloupe is an edible member of the gourd family known for its orange, sweet flesh and hard, scaly outer rind.', 10, 80, 'As with cantaloupe, color is your first sign of ripeness. The melon''s green rind will take on a creamy yellowish color. If the color is right, gently push on the end of the melon opposite from the stem. If there is a slight give, the melon is probably ripe.', '/crop-imgs/canteloupe.jpg', 1),
        ('Carrots', 'The carrot plant produces a rosette of 8 to 12 leaves above ground and a fleshy conical taproot below ground. The plant produces small (2 mm) flowers which are white, red or purple in color. The root can grow to between 5 and 50 cm (2.0 to 20 in) long and reach 5 cm (2.0 in) in diameter. The foliage of the plant can reach a height of 150 cm (59.1 in) when in flower. The carrot plant can be annual or biennial and may also be referred to as wild carrot. The plant is believed to have originated in Europe or the Western Mediterranean.', 21, 70, 'Most carrots are ready to harvest when the shoulders are 1/2 to 3/4 inch (1.5 to 2 cm.) in diameter, but again, there is much variation depending on the variety', '/crop-imgs/carrot.jpg', 1),
        ('Cauliflower', 'Cauliflower is a cool season veggie from the Brassicaceae family, which includes broccoli, and, in fact, cauliflower is often referred to as heading broccoli. Unlike broccoli, however, which produces multiple side shoots, cauliflower only produces a single head which means you have one chance to get it right.', 19, 80, 'As the head (curd) begins to grow, it will eventually become discolored and bitter tasting from sunlight. To avoid this, cauliflower is often blanched to keep the sun off the head and whiten the cauliflower. Generally, this is done when the head reaches about the size of a tennis ball, or 2 to 3 inches (5-8 cm.) in diameter. Simply pull up about three or four large leaves and tie or fasten them loosely around the cauliflower head. Some people cover them with pantyhose too. Since the cauliflower head develops rather quickly in ideal growing conditions, it will usually be ready for harvest within a week or two after the blanching process. It''s a good idea to keep an eye on it to determine when to harvest cauliflower and avoid its becoming too mature, which results in grainy cauliflower. You''ll want to pick the cauliflower once the head is full but before it has begun to separate, usually at about 6 to 12 inches (15-31 cm.) in diameter is when to cut cauliflower.', '/crop-imgs/cauliflower.jpg', 1),
        ('Celery', 'Grown for its succulent stalks or petioles, celery dates as far back as 850 B.C. and was cultivated not for its culinary use, but its medicinal purposes. Today, there are three different kinds of celery: self-blanching or yellow (leaf celery), green or Pascal celery, and celeriac. In the United States, green stalk celery is the usual choice and used both raw and cooked.', 30, 110, 'Picking celery should begin when the lower stalks are at least 6 inches (15 cm.) long, from ground level to the first node. The stalks should still be close together, forming a compact bunch or cone at the proper height for harvesting celery. Upper stalks should reach 18 to 24 inches (45.5-61 cm.) in height and 3 inches (7.5 cm.) in diameter when they are ready for harvest.', '/crop-imgs/celery.jpg', 1),
        ('Corn', 'Sweet corn plants are definitely a warm season crop, easy to grow in any garden. You can plant either sweet corn plants or super sweet corn plants, but don''t grow them together because they may not do well.', 21, 100, 'Knowing when to pick corn is one of the most important factors for a quality crop. Corn is ready for harvest about 20 days after the silk first appears. At harvest time, the silk turns brown, but the husks are still green. Each stalk should have at least one ear near the top. When conditions are right, you may get another ear lower down on the stalk. The lower ears are usually smaller and mature a little later than the ones at the top of the stalk. Before you begin picking the corn, make sure it is in the “milk stage.” Puncture a kernel and look for milky liquid inside. If it''s clear, the kernels aren''t quite ready. If there is no liquid, you''ve waited too long.', '/crop-imgs/corn.jpg', 1),
        ('Cucumber', 'There are two main types of cucumbers: small pickling types that are bumpy and rough and large slicing varieties that are meant to be eaten fresh. Pickling cucumbers also are flavorful and good to eat fresh, although not as large as slicing cucumbers. Slicing cucumbers, however, do not make good pickles due to their high water content. No matter which variety you choose, you''ll enjoy their fresh, crispy texture and versatility.', 10, 70, 'Most slicing cucumbers for fresh eating should be harvested when they are six to nine inches long and have a dark green color. If they get much larger than this, they''ll be bitter and won''t have a pleasant texture.', '/crop-imgs/cucumber.jpg', 1),
        ('Eggplant', 'When starting from seed, expect 100 to 120 days to maturity. July, August, and September (even into October) are all harvest months for eggplant, depending on where you live and the variety you planted. Don''t wait too long to harvest! Eggplant tastes best when harvested young. Eggplant is a small- to a medium-size bush vegetable that produces smooth, glossy-skinned fruit that can vary in length from 5 to 12 inches (12-30cm) long. Eggplants have large, fuzzy, grayish-green leaves and produce star-shaped lavender flowers with yellow centers.', 10, 85, 'Eggplants are ready for harvest and will have the best flavor when the fruit is firm and full-colored with glossy skin.', '/crop-imgs/eggplant.jpg', 1),
        ('Garlic', 'A close relative of the onion, garlic is an edible, bulbous plant native to Asia that has been cultivated for several thousand years. Above ground, garlic appears as flattened, grass-like leaves (also known as scapes). In contrast, below ground, it forms a firm bulb, typically containing between four and 20 cloves, encased in a papery exterior. Garlic should be planted in the fall, about a month or so before the first frost. Harvesting garlic is not an exact science. It will grow slowly over the next nine months or so and will deliver a bountiful harvest by mid-spring or summer. Garlic is known to be toxic to animals.', 14, 90, 'In general, garlic is ready for harvesting when the lower leaves start to brown. The only way to be sure is to dig up a few bulbs to check their progress. If the cloves fill out the skins, it''s time to pick the garlic. Harvesting typically occurs during the late spring to the mid-summer months. Harvesting too soon will result in smaller cloves that don''t store well. However, leaving the bulbs in the ground too long causes the cloves to burst out of their skins, making them vulnerable to disease and shorter storage time. So timing is quite important when it comes to harvesting and storing garlic.', '/crop-imgs/garlic.jpg', 1),
        ('Jalapeno Peppers', 'The jalapeño is the most popular chili pepper in North America! This medium-size pepper produces deep-green 3-inch fruit that mature to a bright red. Hot peppers love the sun and grow in temperatures that range from 70 to 90 F (21 to 32 C). They don''t take up a lot of growing space. A half dozen plants should provide a family with peppers all summer long. You can also grow peppers in containers; look for compact varieties. All chili peppers vary in heat. On the Scoville heat scale, the jalapeño is rated 2,500 to 5,000 units—a “medium-hot” pepper. If you''re interested in growing other hot peppers, you can follow this same guide. It''s fun to grow a variety, especially if you yearn for the burn!', 18, 90, 'Mature jalapeno peppers turn red. Most gardeners start to pick their peppers when the fruits are dark green and beginning to show thin cracks, but you can also wait until they ripen fully to red. Red jalapenos are typically spicier than green fruits.', '/crop-imgs/jalapeno.jpg', 1),
        ('Kale', 'Growing kale is a major hit with families, health nuts, beginner growers, and more. The health benefits of kale are well known these nutty ribbed leaves are notoriously nutrient-packed and easy to grow. Plus, they''re a perfect fall crop.', 21, 70, 'Fully matured kale leaves are about the size of your hand. Your kale plant will begin to produce leaves this size about 70 days after planting. Once the leaves are this size, your kale is ready and you should quickly harvest, as they''ll go bitter shortly after this. However, fully mature kale leaves aren''t the only kind of kale you can harvest. About 25 days after planting, you''ll reach ''microgreen'' size. Microgreens are basically baby kale leaves. These leaves are especially tender and tasty (perfect for eating raw!).', '/crop-imgs/kale.jpg', 1),
        ('Lettuce', 'Lettuce is an easy-to-grow annual vegetable. Considered a spring and fall crop, lettuce thrives when temperatures are between 60 to 70 degrees F. Many varieties reach maturity in as little as 30 days, and some can even be harvested much earlier as microgreens.', 12, 50, 'You don''t have to worry about how to pick lettuce, it''s one of the simplest vegetables to harvest. Most lettuce can be harvested between 30 to 70 days after planting. When to harvest lettuce depends on the variety and what it will be used for. Really, timing is based on individual preference. Once your lettuce reaches the size you want, it''s ready! Harvesting lettuce in the morning gives you the best flavor. Knowing how to harvest leaf lettuce is easy. You can either cut the entire bundle off at ground level, or you can remove just a few leaves at a time. Romaine, butterhead and head lettuce are easily cut off near ground level. If you harvest every other lettuce plant, you give the remaining plants room to continue growing.', '/crop-imgs/lettuce.jpg', 1),
        ('Leeks', 'Leeks are members of the onion family, but instead of forming a bulb, they form a long shank. The French sometimes refer to this nutritious vegetable as the poor man''s asparagus. Leeks are rich in vitamins C, A, and folate, and they also contain kaempferol, a phytochemical believed to help prevent cancer. Let''s learn more about picking leek plants in the garden to take advantage of all they have to offer.', 14, 100, 'Most leeks mature 100 to 120 days after sowing the seeds, but a few varieties mature in as few as 60 days. Begin the harvest when the stalks are about an inch (2.5 cm.) across. Depending upon your climate, you could be harvesting leek plants from late summer until early spring. Picking leek plants that mature at different times of the year lets you extend the harvest. Leeks are best used fresh, but if you must store them, wrap them in a damp paper towel and place them in a plastic bag in the refrigerator for seven to ten days. Smaller leeks keep longest, so use the large ones first. Don''t trim them until you are ready to use them.', '/crop-imgs/leek.jpg', 1),
        ('Lima Beans', 'Lima beans are an interesting crop of beans that grow in the warm season. They are native to Central America, but can be grown elsewhere. They are a very nutritious bean. They are high in protein, thiamine, riboflavin and iron.', 30, 70, 'Lima beans can be harvested in the the shelling stage or the dry stage. Shelling limas are ready for harvest after the pod has changed color and the beans have plumped, but before the pods and seeds have dried. Dry lima beans are ready for harvest when the pods are dry and brittle and the seeds inside are hard.', '/crop-imgs/lima-bean.jpg', 1),
        ('Okra', 'Okra thrives in warm weather and is traditionally grown in the southern U.S., though there are varieties for northern growers, too. Easy to grow and use, it also has beautiful flowers that look great throughout the growing season!', 27, 55, 'It takes only about four days from the time of flowering to the time to pick okra. Harvest the okra when seed pods are 1 to 2 days old and 2 to 4 inches long; these appear about 2 months after planting. This is when okra is at its softest and most digestible.', '/crop-imgs/okra.jpg', 1),
        ('Onions', 'The use of onions for food goes back over 4,000 years. Onions are popular cool season vegetables that can be cultivated from seed, sets or transplants. Onions are an easy-to-grow and manage crop, that when properly harvested, can provide a kitchen staple through the fall and winter.', 13, 100, 'In addition to good planting, you need to know when to harvest onions for the best flavor. Harvest tops for green onions as soon as they reach 6 inches (15 cm.) in height. The longer you wait to harvest the green tops, the stronger they become. Any bulbs that have bolted, or formed flower stalks, should be pulled and used right away; they are not good for storage. Bulb onion harvest time can begin when onion tops naturally fall over and brown. This is usually 100 to 120 days after planting, depending on the cultivar. Onion harvest time should be early in the morning when temperatures are not too hot.', '/crop-imgs/onion.jpg', 1),
        ('Parsley', 'One of the most widely used herbs, parsley is a bright green biennial plant with feather-like leaves. Native to the Mediterranean region, it prefers temperate climates but thrives in a range of climatic conditions. There are two primary varieties of parsley: flat-leaf parsley and curly parsley.', 10, 70, 'Parsley is a biennial and grows back when cut. However, it''s most often grown as an annual plant. It usually takes 70 to 90 days of growth before your parsley plant is ready for harvesting. It is advisable to let the plant develop ample foliage before you start harvesting parsley leaves.', '/crop-imgs/parsley.jpg', 1),
        ('Parsnips', 'The parsnip is a biennial root vegetable that is usually grown as an annual, with a harvest at the first season''s end. It looks like a white carrot, but is sweeter and richer in heart-healthy folate. If it is not harvested, the plant flowers in the second year and sets seed, which can be collected and stored for planting the following growing season.', 26, 90, 'The roots are ready to lift when the foliage starts to die down in late summer or autumn. Use a garden fork to carefully ease them out of the ground. Roots can be left in the ground and harvested as required, although lifting a few extra in November will ensure you still have parsnips to eat even if the soil is frozen.', '/crop-imgs/parsnip.jpg', 1),
        ('Peas', 'The sweet taste of glorious garden-grown peas is nothing like what you find in grocery stores. They are nature''s candy off the vine! Peas are one of the season''s first crops, planted as soon as the ground can be worked, even if snow falls afterwards.', 14, 60, 'Pick snow peas when the delicate pods begin to show immature seeds inside. Pick snap peas when the pods become plump, yet are still glossy and filled with sweet-tasting peas. Pick shell peas before the pods become waxy.', '/crop-imgs/pea.jpg', 1),
        ('Radish', 'Like tomatoes, radishes are a vegetable you have to grow yourself in order to enjoy their true flavor and knowing when to harvest radish is the key to that enjoyment. Grocery store radishes often taste quite spicy, but radishes grown in your garden and harvested at the correct time have a mild flavor and add a crisp crunch to salads and sandwiches. Radish is a cool weather-loving crop. If you wait too long to plant radish seeds, the weather and soil will be too warm, and no roots will form. The leaves may be large and robust, but the root will look more like a rat tail root than a radish. Peak planting times are very early spring for late spring harvests and late summer for fall harvests.', 7, 30, 'One of the easiest ways to know when to harvest radish is to keep track of your planting dates. Most radish varieties are ready to be pulled 30 to 45 days after sowing the seeds. If you remember when you planted the seeds, it''s easy to determine the best harvesting date. Ripe radishes will only hold in the soil for a week or two past their peak. If you keep them in the ground too long, the roots taste bitter and the texture is woody. Plus, the plants will go to flower (which is great for the pollinators but not so good for the salad plate).', '/crop-imgs/radish.jpg', 1),
        ('Spinach', 'Spinach is a green, leafy vegetable rich in iron and vitamin C that can be enjoyed fresh or cooked. It is a fast-growing plant and in most areas, you can get multiple crops in the growing season. Spinach tends to bolt and get bitter when temperatures soar, so harvest time is important to get the best leaves. Choosing when to pick spinach depends on whether you want baby leaves or full-grown. Picking spinach as needed is called “cut and come again” and is a good way to harvest this highly perishable vegetable.', 11, 30, 'When to pick spinach is an important consideration in order to get the best-tasting leaves and prevent bolting. Spinach is a cool-season crop that will flower or bolt when the sun is high and temperatures are warm. Most varieties mature in 37 to 45 days and can be harvested as soon as it is a rosette with five or six leaves. Baby spinach leaves have a sweeter flavor and a more tender texture. Spinach leaves should be removed before they get yellow and within a week of full leaf formation. There are a few methods on how to harvest spinach as a complete harvest or continuous harvest.', '/crop-imgs/spinach.jpg', 1),
        ('Tomatoes', 'It may surprise you to learn that with varieties of different tomatoes, color is not constant. As a matter of fact, tomatoes weren''t always red. The tomato varieties that existed when tomatoes were first cultivated were yellow or orange. Through breeding, the standard color of tomato plant varieties is now red. While red may be the predominate color among tomatoes now, that doesn''t mean that there aren''t other colors of tomatoes available.', 10, 60, 'Tomatoes are gassy... As in, they emit a gas. Ethylene gas is produced by fully formed mature green tomatoes. Inside the mature green tomato, two growth hormones change and cause the production of the gas, which in turn ages the cells of the fruit, resulting in softening and loss of the green color, turning into a red shade. The ethylene increases the carotenoids (red and yellow colors) and decreases the chlorophyll (green color). It is because of this process, tomatoes are one of the only vegetables, I mean fruit, which can be picked before it is completely ripened. Harvest time for tomatoes should ideally occur when the fruit is a mature green and then allowed to ripen off the vine. This prevents splitting or bruising and allows for a measure of control over the ripening process.', '/crop-imgs/tomato.jpg', 1),
        ('Turnips', 'Turnips are a root vegetable that grow quickly and are ready for harvest in as little as two months. There are many varieties to choose from and each has a slightly different mature date. When are turnips ready for picking? You can pull them at several stages of growth. When to harvest turnips depends upon whether you prefer the robust, large bulbs or the tender, sweet young roots.', 5, 50, 'There are different methods for harvesting and storing turnips. Some are pulled and bunched together with the leaves and stems intact. These are best taken when they are 2 inches (5 cm.) in diameter. Those that are topped, which means the greens are removed, are harvested when 3 inches (8 cm.) in diameter. The actual time for harvesting a turnip root is determined by the variety and your growing conditions. Plants that grow in less than ideal conditions will take longer to mature. If you are harvesting turnip greens, this will also slow the production of the root and they will take longer before harvest.', '/crop-imgs/turnip.jpg', 1),
        ('Watermelon', 'Everyone seems to love juicy watermelon in the summertime. Native to Africa, melons require warm temperatures and a long growing season, but there are tons of varieties of watermelons. By late summer, they should be just about ready to harvest!', 10, 80, 'You can usually check the tendrils. Those curly green things growing on the ends of your melon will first turn yellow and then change to a brown color. When this happens, it means the plant is no longer feeding the watermelon and the time for picking one is getting close. If your tendril looks nearly dead, the melon is definitely ripe, and could even be over-ripe. You can also look for a crack at the stem. Sometimes the stem of a watermelon will split on the stem itself, just above the top of the melon. If there is a small crack at this point, it indicates that the fruit should be ripe and ready to harvest.', '/crop-imgs/watermelon.jpg', 1),
        ('Basil', 'Basil is easy to grow in warm sunny conditions. It is also easy to grow indoors. Basil is as aromatic in the kitchen as it is in the garden. Cooks around the world turn to basil. It is perhaps most popular in Mediterranean and Asian dishes. It is a great addition to most vegetable, fish, and poultry dishes, and summer salads. And, of course, basil is the key ingredient of pesto. Basil is often matched with tomatoes in recipes, and in the garden basil is a companion plant that is said to enhance the growth of both tomatoes and peppers.', 10, 60, 'With time I understood that, in fact, basil can be harvested as soon as the plant is about 12 inches tall in all safety, and that harvesting… or pruning which in the case of aromatic herbs is the same thing is essential to ensure a healthy development of the plant. Some gardeners even claim that you don''t even have to wait until the plant reaches the above-mentioned height and that you can start harvesting as soon as the basil developed a few sets of leaves. Nevertheless, as basil is a plant that grows pretty fast, I believe that it is better to wait for the plant to develop a little before passing to harvesting.', '/crop-imgs/basil.jpg', 1),
        ('Cilantro', 'Cilantro, a delicate green annual herb with long stems and feathery leaves similar in form to parsley is often found growing tall. It''s often used in Mexican food and other dishes as well. Cilantro is a member of the Apiaceae family, and it has characteristics in common with parsley, carrots, and dill. It actually comes from the plant Coriandrum sativum. There are two parts of the plant that can be used for cooking - the leaves and the seeds. The leaves of the plant are referred to as cilantro and the seeds are called coriander.', 10, 40, 'Cilantro is ready to harvest when it has tender green leaves and is about 6 inches tall.  It takes anywhere from 4 to 6 weeks for your cilantro plants to mature and be ready to harvest, depending on the growing conditions.', '/crop-imgs/cilantro.jpg', 1),
        ('Sage', 'Sage originates from the Mediterranean similar to herbs such as rosemary, thyme, oregano, and marjoram. All of these herbs enjoy the same hot, full sun, well-drained growing conditions. Like most herbs, the flavor is strongest when used fresh. However, sage dries easily for longer-term storage and retains a good amount of flavor.', 20, 55, 'Harvest sage in spring and summer when plants are actively growing and before they begin to flower. Sage leaves tend to lose some of their aroma after flowering, so it is best to harvest before this time.  As summer closes and temperatures fall, sage leaf production slows down, stopping almost completely in winter.', '/crop-imgs/sage.jpg', 1),
        ('Rosemary', 'Rosemary is a strongly flavored, half-hardy, evergreen shrub. It''s a perennial, but it''s grown as an annual in areas with frigid winters. With its aromatic, needle-shaped, blue-green leaves, it is easily identifiable. Different varieties are available; tall upright kinds and tumbling prostrate forms. Not all are very hardy, so choose carefully.', 30, 45, 'You can take some of the leaves, which look like short pine needles and use them fresh any time you want them. Growth can be pruned back several times during a season.', '/crop-imgs/rosemary.jpg', 1),
        ('Oregano', 'With its trailing green leaves and small white or purple flowers, oregano can just as easily be an ornamental plant as a culinary herb. It has a robust, herbaceous flavor that frequently stars in Italian dishes and pairs well with almost any type of vegetable or meat.', 14, 60, 'The best time to harvest oregano is right before it flowers, just as the flower buds are starting to form. You can still harvest either before or after this stage, but this is when the leaves will have their best and most intense flavor.', '/crop-imgs/oregano.jpg', 1),
        ('Catnip', 'Catnip is an herb that has been attracting cats for more than 2,500 years—and that''s just recorded history. The gray-green foliage when bruised or rubbed releases oil that is irresistible to cats. But catnip is not just for cats; catnip is a member of the mint family and like other mints catmint can be used in the kitchen to flavor salads and teas and on the grill to flavor meats.', 10, 40, 'Snip catnip leaves anytime once the plant is 6 inches tall or taller. The flavor of catnip is milder before the plant blooms. If harvesting leaves for your cat, wait until the plant blooms.', '/crop-imgs/catnip.jpg', 1),
        ('Thyme', 'Thyme originates from the Mediterranean and is easy to grow, low maintenance, and drought tolerant. You will want to grow thyme in a location with full sun and well-drained sandy soil.  Some gardeners grow thyme in containers to bring indoors during the winter or in herb gardens next to rosemary, oregano, parsley, and sage. ', 25, 60, 'If you are in the first year of planting thyme, it is recommended to be very (very!) sparse and light with harvesting. This first year is key for letting the plants establish so that you can enjoy years of delightful harvests! Feel free to take a few small sprigs from the tip of the thyme or a few leaves to flavor your dishes every once in a while. Keep in mind that your plants are still a baby and cannot tolerate too much harvesting in their first year in the garden. You can harvest fresh thyme periodically throughout the growing season, spring and summer. For the most flavor from your herbs, trim cuttings right before or as the plant flowers. The best time of the day to harvest thyme is on a sunny morning after the leaves are dry from any dew or moisture.', '/crop-imgs/thyme.jpg', 1),
        ('Mint', 'Mint is a perennial herb with very fragrant, toothed leaves and tiny purple, pink, or white flowers. There are many varieties of mint—all fragrant, whether shiny or fuzzy, smooth or crinkled, bright green or variegated. However, you can always tell a member of the mint family by its square stem. Rolling it between your fingers, you''ll notice a pungent scent and think of candy, sweet teas, or maybe even mint juleps. Mint is a vigorous grower and needs to be contained or it will send out its runners and spread all over your garden. The key is to contain the plant''s roots. Whether it''s in the ground or above ground, plant mint in a pot.', 12, 45, 'Harvest mint leaves at any size by pinching off stems. For a large harvest, wait until just before the plant blooms, when the flavour is most intense, then cut the whole plant to just above the first or second set of leaves. In the process, you will remove the yellowing lower leaves and promote bushier growth. Three such harvests per season are typical for mint.', '/crop-imgs/mint.jpg', 1);