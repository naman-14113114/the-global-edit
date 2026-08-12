export type GuidePoint = {
  title: string;
  body: string;
};

export type GuideSection = {
  heading: string;
  intro?: string;
  points: GuidePoint[];
};

export type GuideCategory = "Home" | "Travel" | "Clothing care";

export type GuideVisual =
  | "home-reset"
  | "small-kitchen"
  | "guest-room"
  | "carry-on"
  | "weekend-bag"
  | "clothing-care"
  | "wardrobe-rotation";

export type Guide = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: GuideCategory;
  published: string;
  reviewed: string;
  readingTime: string;
  visual: GuideVisual;
  sections: GuideSection[];
};

export type Category = {
  slug: string;
  name: GuideCategory;
  description: string;
};

const published = "12 August 2026";

export const categories: Category[] = [
  {
    slug: "home",
    name: "Home",
    description:
      "Room-by-room systems for keeping everyday spaces useful, calm and easy to reset.",
  },
  {
    slug: "travel",
    name: "Travel",
    description:
      "Packing methods that begin with the trip you are taking, not a shopping list.",
  },
  {
    slug: "clothing-care",
    name: "Clothing care",
    description:
      "Simple routines for sorting, caring for and storing the clothes you already own.",
  },
];

export const guides: Guide[] = [
  {
    slug: "room-by-room-home-reset",
    title: "A Room-by-Room Home Reset You Can Finish in a Weekend",
    shortTitle: "The room-by-room home reset",
    description:
      "A practical order for clearing surfaces, returning misplaced items and preparing each room for the week ahead.",
    category: "Home",
    published,
    reviewed: published,
    readingTime: "7 minute read",
    visual: "home-reset",
    sections: [
      {
        heading: "Decide what finished means",
        intro:
          "A reset is easier when the finish line is visible. Aim for a functional home, not a complete reorganisation project.",
        points: [
          {
            title: "Choose three visible outcomes",
            body: "Use a short definition such as clear floors, usable worktops and every room ready for its next activity. This keeps side projects from taking over the day.",
          },
          {
            title: "Carry one return basket",
            body: "Put items that belong elsewhere into one basket while you work. Return them in a single lap instead of walking between rooms for every object.",
          },
          {
            title: "Separate decisions from actions",
            body: "Create four destinations: keep here, return elsewhere, recycle or discard, and decide later. Limit the decide-later group to one small container.",
          },
        ],
      },
      {
        heading: "Work in an order that stays finished",
        intro:
          "Start where the household enters, then move through the rooms that collect the most daily activity.",
        points: [
          {
            title: "Entryway first",
            body: "Hang coats, pair shoes, clear post and leave one open surface. A clear arrival point stops new clutter from spreading while the rest of the reset is underway.",
          },
          {
            title: "Kitchen and bathroom next",
            body: "Put away clean items, remove empties, clear the main surfaces and restock only the basics. These rooms feel complete quickly when their working zones are open.",
          },
          {
            title: "Living areas and bedrooms last",
            body: "Return shared items, fold throws, clear bedside surfaces and prepare clothes for the next morning. Leave detailed drawer sorting for another session.",
          },
        ],
      },
      {
        heading: "Close the loop before you stop",
        intro:
          "The last fifteen minutes prevent half-finished piles from becoming tomorrow's first problem.",
        points: [
          {
            title: "Empty the return basket",
            body: "Make one final circuit and put each object in its home. If an object has no home, place it in the decide-later container rather than starting a new cupboard project.",
          },
          {
            title: "Remove outgoing items",
            body: "Take rubbish and recycling out, put donations by the door, and move anything that must leave the house into the car or next to your keys.",
          },
          {
            title: "Set a ten-minute weekly reset",
            body: "Repeat the entryway, worktops and return-basket routine at the same time each week. A small predictable reset is easier to maintain than another full weekend session.",
          },
        ],
      },
    ],
  },
  {
    slug: "small-kitchen-organisation",
    title: "How to Organise a Small Kitchen Around the Way You Use It",
    shortTitle: "Organising a small kitchen",
    description:
      "A zone-based method for deciding what stays near the hob, sink, worktop and everyday eating area.",
    category: "Home",
    published,
    reviewed: published,
    readingTime: "6 minute read",
    visual: "small-kitchen",
    sections: [
      {
        heading: "Map the work before the cupboards",
        points: [
          {
            title: "Name the repeated actions",
            body: "List what happens most days: making a hot drink, preparing breakfast, chopping, cooking, washing up and packing food. These actions should determine where equipment lives.",
          },
          {
            title: "Mark four working zones",
            body: "Use the sink, preparation surface, hob and serving area as anchors. Items should live beside the place where they are first used, not wherever an empty shelf happens to be.",
          },
          {
            title: "Protect one clear worktop",
            body: "Choose the most useful stretch of surface and keep it free of permanent storage. A small kitchen feels larger when one task can begin without moving several objects first.",
          },
        ],
      },
      {
        heading: "Give the easiest space to everyday items",
        points: [
          {
            title: "Use prime shelves for frequent tools",
            body: "Keep daily plates, glasses, pans and ingredients between knee and eye level. Reserve high, low and awkward corners for occasional pieces.",
          },
          {
            title: "Store by complete task",
            body: "Keep tea, coffee, mugs and the kettle together. Keep chopping boards, knives and mixing bowls near the main preparation surface. Fewer crossings make the room easier to use.",
          },
          {
            title: "Avoid duplicate categories",
            body: "One open packet area, one spare-food area and one container shelf are easier to scan than the same category spread across several cupboards.",
          },
        ],
      },
      {
        heading: "Build a five-minute closing routine",
        points: [
          {
            title: "Reset the main surface",
            body: "Put away the last tools, wipe the protected worktop and leave the sink usable. This is the smallest action that changes how the kitchen feels the next morning.",
          },
          {
            title: "Use one overflow limit",
            body: "Choose a single shelf or basket for back-up supplies. When it is full, use what is there before adding more.",
          },
          {
            title: "Review one zone at a time",
            body: "If a cupboard stops working, adjust that task zone only. Reorganising the whole kitchen each time makes useful habits harder to see.",
          },
        ],
      },
    ],
  },
  {
    slug: "guest-room-checklist",
    title: "A Guest-Room Checklist for a Comfortable Overnight Stay",
    shortTitle: "The guest-room checklist",
    description:
      "A short room-preparation sequence covering sleep, storage, lighting and the practical details guests need on arrival.",
    category: "Home",
    published,
    reviewed: published,
    readingTime: "5 minute read",
    visual: "guest-room",
    sections: [
      {
        heading: "Prepare the room for arrival",
        points: [
          {
            title: "Clear one luggage surface",
            body: "Leave a chair, bench or section of floor open so a bag does not have to sit on the bed. Empty a few hangers or a drawer if the stay is longer than one night.",
          },
          {
            title: "Check the room at guest height",
            body: "Stand beside the bed and look for the light switch, a clear path to the door, a socket and a place for water or a phone. Move anything that requires explanation.",
          },
          {
            title: "Remove private overflow",
            body: "Relocate laundry, paperwork and storage boxes rather than hiding them in the wardrobe your guest may need to use.",
          },
        ],
      },
      {
        heading: "Set up the sleep basics",
        points: [
          {
            title: "Make choices visible",
            body: "Provide an extra blanket and a second pillow where they can be found without asking. Keep the room simple enough that nothing looks off-limits.",
          },
          {
            title: "Test light and temperature",
            body: "Confirm the bedside light works and explain any unfamiliar heating control. Curtains or blinds should close fully and be easy to operate.",
          },
          {
            title: "Leave a quiet landing spot",
            body: "A small empty surface beside the bed is more useful than decoration. It gives glasses, keys and a phone an obvious place to go.",
          },
        ],
      },
      {
        heading: "Share only the information they need",
        points: [
          {
            title: "Write down the essentials",
            body: "Provide the Wi-Fi name and password, bathroom location and any simple door instructions. Keep the note brief enough to read at a glance.",
          },
          {
            title: "Mention the morning plan",
            body: "Tell guests when the household usually wakes, where they can make a drink and whether breakfast is planned. Clear expectations are more useful than a perfectly styled room.",
          },
          {
            title: "Reset after departure",
            body: "Air the room, collect laundry, empty the bin and return the spare blanket and information card to their usual places. The next setup will take minutes.",
          },
        ],
      },
    ],
  },
  {
    slug: "carry-on-packing-list",
    title: "How to Build a Carry-On Packing List for the Trip You Are Taking",
    shortTitle: "Building a carry-on packing list",
    description:
      "A repeatable planning method that starts with days and activities, then turns them into outfits and a final bag check.",
    category: "Travel",
    published,
    reviewed: published,
    readingTime: "7 minute read",
    visual: "carry-on",
    sections: [
      {
        heading: "Plan from the itinerary, not the wardrobe",
        points: [
          {
            title: "List the fixed activities",
            body: "Write one line for each day and mark travel, work, walking, dinner, weather exposure and any event with a clear dress requirement.",
          },
          {
            title: "Build one flexible outfit formula",
            body: "Choose a repeatable base, such as two bottoms, several tops and one outer layer that work together. Each extra item should complete more than one outfit.",
          },
          {
            title: "Wear the bulkiest useful pieces",
            body: "If practical for the journey, wear the heaviest shoes and outer layer. Do not add uncomfortable items simply to save bag space.",
          },
        ],
      },
      {
        heading: "Pack in modules you can inspect",
        points: [
          {
            title: "Keep the first night together",
            body: "Place sleepwear, underwear and the next morning's top in one easy-to-reach group. This prevents a full unpack after a late arrival.",
          },
          {
            title: "Separate small categories",
            body: "Use one pouch each for toiletries, cables and small essentials. The purpose is quick inspection, not squeezing every item into the smallest possible space.",
          },
          {
            title: "Leave a small return margin",
            body: "A bag that only closes under pressure is difficult to use during the trip. Leave room for laundry separation and the ordinary expansion that happens after unpacking.",
          },
        ],
      },
      {
        heading: "Run a final door-side check",
        points: [
          {
            title: "Confirm rules with the carrier",
            body: "Check the airline or transport operator's current size, weight and restricted-item rules directly before travel. This guide does not replace those requirements.",
          },
          {
            title: "Check the items that cannot be improvised",
            body: "Confirm identification, tickets, essential medication, keys, phone and charging cable separately from the clothing list.",
          },
          {
            title: "Save the list after the trip",
            body: "Mark what went unused and what was missed. Your next packing list should begin with that record rather than starting again from memory.",
          },
        ],
      },
    ],
  },
  {
    slug: "weekend-bag-packing-plan",
    title: "A Simple Weekend-Bag Packing Plan",
    shortTitle: "The weekend-bag packing plan",
    description:
      "A compact two-night packing sequence for clothes, toiletries, chargers and the items needed on the journey home.",
    category: "Travel",
    published,
    reviewed: published,
    readingTime: "5 minute read",
    visual: "weekend-bag",
    sections: [
      {
        heading: "Start with two complete days",
        points: [
          {
            title: "Write Saturday and Sunday separately",
            body: "Note the main activity, likely weather and evening plan for each day. Pack to those plans instead of adding disconnected options.",
          },
          {
            title: "Choose one shared layer",
            body: "A single overshirt, jumper or light jacket that works with both days usually does more than two highly specific extras.",
          },
          {
            title: "Add one change, not a second wardrobe",
            body: "Keep one spare top or equivalent for delays and spills. More backups often create a heavier bag without changing the trip.",
          },
        ],
      },
      {
        heading: "Make the travel day easy",
        points: [
          {
            title: "Keep journey items at the top",
            body: "Headphones, a cable, water bottle and a small snack should be reachable without opening every clothing layer.",
          },
          {
            title: "Use a small overnight pouch",
            body: "Group the few toiletries and personal items needed before bed. Check transport rules if the journey includes airport security.",
          },
          {
            title: "Give worn clothes a destination",
            body: "Pack one light laundry bag or reserve one packing cube. Separating worn items makes the return unpack much faster.",
          },
        ],
      },
      {
        heading: "Pack the return before leaving",
        points: [
          {
            title: "Leave one outfit untouched",
            body: "Set aside the return-day outfit before filling the rest of the bag. It should suit the journey and remain easy to reach.",
          },
          {
            title: "Use the same pocket map both ways",
            body: "Keep keys, wallet, travel documents and charger in the same pockets throughout the trip. Repetition reduces the final-room search.",
          },
          {
            title: "Do a four-point room scan",
            body: "Check the bed, bathroom, sockets and behind the door before departure. These four places catch most items left temporarily outside the bag.",
          },
        ],
      },
    ],
  },
  {
    slug: "clothing-care-routine",
    title: "How to Build a Clothing-Care Routine from the Garment Label",
    shortTitle: "A clothing-care routine from the label",
    description:
      "A careful way to sort laundry, follow each garment's instructions and record special-care items before they are forgotten.",
    category: "Clothing care",
    published,
    reviewed: published,
    readingTime: "6 minute read",
    visual: "clothing-care",
    sections: [
      {
        heading: "Read before sorting",
        points: [
          {
            title: "Check the label on unfamiliar pieces",
            body: "Read the care label before placing a new or rarely washed garment into a routine load. The item's own instructions matter more than a general fabric rule.",
          },
          {
            title: "Separate by actual care needs",
            body: "Create groups for ordinary machine washing, gentle handling, hand washing and professional care. Colour can be a second sort within those groups.",
          },
          {
            title: "Do not guess at a symbol",
            body: "If a care symbol is unfamiliar, use the garment maker's guidance or an authoritative symbol reference before proceeding.",
          },
        ],
      },
      {
        heading: "Make special care visible",
        points: [
          {
            title: "Use a separate holding place",
            body: "Keep hand-wash and professional-care items out of the main basket. A clearly labelled bag or small basket prevents them entering an automatic load by habit.",
          },
          {
            title: "Record the easy-to-forget detail",
            body: "If an item has an unusual instruction, add a small note in your laundry area or phone. The goal is to avoid rereading a tiny label under time pressure.",
          },
          {
            title: "Fasten and empty before washing",
            body: "Check pockets and follow the garment's instructions for zips, buttons, belts and removable parts. Treat manufacturer directions as the final reference.",
          },
        ],
      },
      {
        heading: "Finish the routine before storage",
        points: [
          {
            title: "Dry according to the label",
            body: "Do not assume every item in a wash group can share the same drying method. Recheck special pieces as they leave the machine or basin.",
          },
          {
            title: "Return items only when fully ready",
            body: "Let garments dry completely, then fold or hang them in their usual place. A clean pile outside the wardrobe is still an unfinished laundry cycle.",
          },
          {
            title: "Review repeated friction",
            body: "If the same pieces are repeatedly delayed because their care is impractical, store them where the instructions are visible or reconsider how often they belong in rotation.",
          },
        ],
      },
    ],
  },
  {
    slug: "seasonal-wardrobe-rotation",
    title: "A Seasonal Wardrobe Rotation Without the Spare-Room Pile",
    shortTitle: "The seasonal wardrobe rotation",
    description:
      "A keep, repair, clean and store sequence that moves clothes between seasons without creating an unfinished sorting project.",
    category: "Clothing care",
    published,
    reviewed: published,
    readingTime: "7 minute read",
    visual: "wardrobe-rotation",
    sections: [
      {
        heading: "Edit the outgoing season first",
        points: [
          {
            title: "Handle one category at a time",
            body: "Finish coats before moving to knitwear, then shoes and accessories. Small completed categories are easier to store than one mixed floor pile.",
          },
          {
            title: "Use four clear decisions",
            body: "Choose keep, repair, release or unsure. Give the unsure group a fixed container and review date so it does not return to the wardrobe by default.",
          },
          {
            title: "Check condition in daylight",
            body: "Look for stains, loose fastenings, worn soles and missing parts before storage. Problems are easier to solve now than on the first cold or warm day of the next season.",
          },
        ],
      },
      {
        heading: "Prepare items for storage",
        points: [
          {
            title: "Follow each care label",
            body: "Clean items according to their own instructions and make sure they are fully dry before packing. Do not use one treatment across different materials without checking.",
          },
          {
            title: "Keep repairs separate and visible",
            body: "Place repair items in one labelled bag with the needed action. Set a date to complete or outsource the repairs before the next season begins.",
          },
          {
            title: "Label containers by contents",
            body: "Use descriptions such as winter knitwear or summer shoes rather than a generic clothes label. Add a short contents list if containers are not transparent.",
          },
        ],
      },
      {
        heading: "Bring the new season in slowly",
        points: [
          {
            title: "Start with the next two weeks",
            body: "Move only the pieces that match the current weather and routine. Keeping transitional items available avoids reversing the whole rotation after one change in temperature.",
          },
          {
            title: "Give every category a boundary",
            body: "Decide how much rail, drawer or shelf space each group can use. The boundary makes overcrowding visible before more items are added.",
          },
          {
            title: "Save a short rotation note",
            body: "Record missing basics, repairs and anything left unworn. Use the note when the next rotation begins instead of relying on memory or shopping first.",
          },
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getGuidesByCategory(category: GuideCategory) {
  return guides.filter((guide) => guide.category === category);
}
