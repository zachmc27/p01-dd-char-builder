
const continueButton = document.querySelector('#continue');
const backButton = document.querySelector('#back');
const weaponsBox = document.querySelector('.weapons-box');
const spellsBox = document.querySelector('.spells-box')
const classDescription = document.querySelector('.class-description')


backButton.addEventListener('click', function() {
    window.location.href = 'details.html';
  });

continueButton.addEventListener('click', function() {
    window.location.href = 'backstory.html';
  });

document.addEventListener('click', (event) => {
  const element = event.target

  if (element.matches('.barbarian') === true) {
    document.querySelector('.barbarian').style.opacity = '100%'
    document.querySelector('.bard').style.opacity = ''
    document.querySelector('.cleric').style.opacity = ''
    document.querySelector('.druid').style.opacity = ''
    document.querySelector('.fighter').style.opacity = ''
    document.querySelector('.paladin').style.opacity = ''
    document.querySelector('.ranger').style.opacity = ''
    document.querySelector('.rogue').style.opacity = ''
    document.querySelector('.warlock').style.opacity = ''
    document.querySelector('.wizard').style.opacity = ''
    classDescription.innerHTML = `<h3 class='class-data'>Barbarian</h3> <p>Barbarians come alive in the chaos of combat. They rely on strength and fury in a fight rather than wit or cunning and have the constitution to power through. </p>`
    weaponsBox.innerHTML = ` <fieldset class="weapons">
          <h3>Tools/Weapons</h3>  
          
            <div>
              <input type="radio" id="great-axe" name="weapon" value="Great Axe"/>
              <label for="great-axe">Great Axe</label>
            </div>
          
            <div>
              <input type="radio" id="great-sword" name="weapon" value="Great Sword" />
              <label for="dewey">Great Sword</label>
            </div>
          
            <div>
              <input type="radio" id="hand-axes" name="weapon" value="Hand Axes" />
              <label for="louie">Hand Axes</label>
            </div>
          </fieldset>`
    
    spellsBox.innerHTML = ` <fieldset class="spells">
          <h3>Spells/Abilities</h3>  
          
            <div>
              <input type="radio" id="feral-instinct" name="spells" value="Feral Instinct"/>
              <label for="feral-instinct"><span class="label-size">Feral Instinct</span> - You are immune to surprise attacks.</label>
            </div>
          
            <div>
              <input type="radio" id="reckless-attack" name="spells" value="Reckless Attack" />
              <label for="reckless-attack"><span class="label-size">Reckless Attack</span> - you gain advantage on attack rolls but are more prone to harm in return.</label>
            </div>
          
            <div>
              <input type="radio" id="rage" name="spells" value="Rage" />
              <label for="rage"><span class="label-size">Rage</span> - You gain advantage on strength rolls and immunity to certain attack types.</label>
            </div>
          </fieldset>`
  } 
  
  if (element.matches('.bard') === true) {
    document.querySelector('.barbarian').style.opacity = ''
    document.querySelector('.bard').style.opacity = '100%'
    document.querySelector('.cleric').style.opacity = ''
    document.querySelector('.druid').style.opacity = ''
    document.querySelector('.fighter').style.opacity = ''
    document.querySelector('.paladin').style.opacity = ''
    document.querySelector('.ranger').style.opacity = ''
    document.querySelector('.rogue').style.opacity = ''
    document.querySelector('.warlock').style.opacity = ''
    document.querySelector('.wizard').style.opacity = ''
    classDescription.innerHTML = `<h3 class='class-data'>Bard</h3> <p>The greatest strength of bards is their sheer versatility. Words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. </p>`

    weaponsBox.innerHTML = ` <fieldset class="weapons">
          <h3>Tools/Weapons</h3>  
          
            <div>
              <input type="radio" id="lute" name="weapon" value="Lute"/>
              <label for="lute">Lute</label>
            </div>
          
            <div>
              <input type="radio" id="lyre" name="weapon" value="Lyre" />
              <label for="lyre">Lyre</label>
            </div>
          
            <div>
              <input type="radio" id="flute" name="weapon" value="Flute" />
              <label for="flute">Flute</label>
            </div>
          </fieldset>`
    
    spellsBox.innerHTML = ` <fieldset class="spells">
          <h3>Spells/Abilities</h3>  
          
            <div>
              <input type="radio" id="vicious-mockery" name="spells" value="Vicious Mockery"/>
              <label for="vicious-mockery"><span class="label-size">Vicious Mockery</span> - You unleash a string of insults laced with subtle enchantments at a creature you can see within range, causing them damage.</label>
            </div>
          
            <div>
              <input type="radio" id="minor-illusion" name="spells" value="Minor Illusion" />
              <label for="minor-illusion"><span class="label-size">Minor Illusion</span> - You create a sound or an image of an object within range.</label>
            </div>
          
            <div>
              <input type="radio" id="blade-ward" name="spells" value="Blade Ward" />
              <label for="blade-ward"><span class="label-size">Blade Ward</span> - You trace a sigil of warding in the air which gives you resistance to certain attack types.</label>
            </div>
          </fieldset>`
  } 

  if (element.matches('.cleric') === true) {
    document.querySelector('.barbarian').style.opacity = ''
    document.querySelector('.bard').style.opacity = ''
    document.querySelector('.cleric').style.opacity = '100%'
    document.querySelector('.druid').style.opacity = ''
    document.querySelector('.fighter').style.opacity = ''
    document.querySelector('.paladin').style.opacity = ''
    document.querySelector('.ranger').style.opacity = ''
    document.querySelector('.rogue').style.opacity = ''
    document.querySelector('.warlock').style.opacity = ''
    document.querySelector('.wizard').style.opacity = ''
    classDescription.innerHTML = `<h3 class='class-data'>Cleric</h3> <p>Clerics draw power from the realms of the gods and harness it to work miracles. Blessed by their deific patron, a Cleric can reach out to the divine magic of the Outer Planes—where gods dwell—and channel it to bolster people and battle foes. </p>`

    weaponsBox.innerHTML = ` <fieldset class="weapons">
          <h3>Tools/Weapons</h3>  
          
            <div>
              <input type="radio" id="mace" name="weapon" value="Mace"/>
              <label for="mace">Mace</label>
            </div>
          
            <div>
              <input type="radio" id="javellin" name="weapon" value="Javellin" />
              <label for="javellin">Javellin</label>
            </div>
          
            <div>
              <input type="radio" id="lance" name="weapon" value="Lance" />
              <label for="lance">Lance</label>
            </div>
          </fieldset>`
    
    spellsBox.innerHTML = ` <fieldset class="spells">
          <h3>Spells/Abilities</h3>  
          
            <div>
              <input type="radio" id="hand-of-radiance" name="spells" value="Hand of Radiance"/>
              <label for="hand-of-radiance"><span class="label-size">Hand of Radiance</span> - You raise your hand, and burning radiance erupts from it.</label>
            </div>
          
            <div>
              <input type="radio" id="spare-the-dying" name="spells" value="Spare the Dying" />
              <label for="spare-the-dying"><span class="label-size">Spare the Dying</span> - You touch a creature with 0 hit points and stabilize them.</label>
            </div>
          
            <div>
              <input type="radio" id="mending" name="spells" value="Mending" />
              <label for="mending"><span class="label-size">Mending</span> - This spell repairs a single break or tear in an object you touch.</label>
            </div>
          </fieldset>`
  }

  if (element.matches('.druid') === true) {
    document.querySelector('.barbarian').style.opacity = ''
    document.querySelector('.bard').style.opacity = ''
    document.querySelector('.cleric').style.opacity = ''
    document.querySelector('.druid').style.opacity = '100%'
    document.querySelector('.fighter').style.opacity = ''
    document.querySelector('.paladin').style.opacity = ''
    document.querySelector('.ranger').style.opacity = ''
    document.querySelector('.rogue').style.opacity = ''
    document.querySelector('.warlock').style.opacity = ''
    document.querySelector('.wizard').style.opacity = ''
    classDescription.innerHTML = `<h3 class='class-data'>Druid</h3> <p>Druids are an embodiment of nature’s resilience, cunning, and fury. They claim no mastery over nature. Instead, they see themselves as extensions of nature’s indomitable will.</p>`

    weaponsBox.innerHTML = ` <fieldset class="weapons">
          <h3>Tools/Weapons</h3>  
          
            <div>
              <input type="radio" id="quarter-staff" name="weapon" value="Quarter Staff"/>
              <label for="quarter-staff">Quarter Staff</label>
            </div>
          
            <div>
              <input type="radio" id="scimitar" name="weapon" value="Scimitar" />
              <label for="scimitar">Scimitar</label>
            </div>
          
            <div>
              <input type="radio" id="spear" name="weapon" value="Spear" />
              <label for="spear">Spear</label>
            </div>
          </fieldset>`
    
    spellsBox.innerHTML = ` <fieldset class="spells">
          <h3>Spells/Abilities</h3>  
          
            <div>
              <input type="radio" id="create-bonfire" name="spells" value="Create Bonfire"/>
              <label for="create-bonfire"><span class="label-size">Create Bonfire</span> - You create a bonfire on ground that you can see within range.</label>
            </div>
          
            <div>
              <input type="radio" id="frostbite" name="spells" value="Frostbite" />
              <label for="frostbite"><span class="label-size">Frostbite</span> - You cause numbing frost to form on one creature that you can see within range.</label>
            </div>
          
            <div>
              <input type="radio" id="thorn-whip" name="spells" value="Thorn Whip" />
              <label for="thorn-whip"><span class="label-size">Thorn Whip</span> - You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range.</label>
            </div>
          </fieldset>`
  }

  if (element.matches('.fighter') === true) {
    document.querySelector('.barbarian').style.opacity = ''
    document.querySelector('.bard').style.opacity = ''
    document.querySelector('.cleric').style.opacity = ''
    document.querySelector('.druid').style.opacity = ''
    document.querySelector('.fighter').style.opacity = '100%'
    document.querySelector('.paladin').style.opacity = ''
    document.querySelector('.ranger').style.opacity = ''
    document.querySelector('.rogue').style.opacity = ''
    document.querySelector('.warlock').style.opacity = ''
    document.querySelector('.wizard').style.opacity = ''
    classDescription.innerHTML = `<h3 class='class-data'>Fighter</h3> <p>Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword, and use a bow with some degree of skill. This combination of broad general ability makes fighters superior combatants.</p>`

    weaponsBox.innerHTML = ` <fieldset class="weapons">
          <h3>Tools/Weapons</h3>  
          
            <div>
              <input type="radio" id="great-sword" name="weapon" value="Great Sword"/>
              <label for="great-sword">Great Sword</label>
            </div>
          
            <div>
              <input type="radio" id="hand-axes" name="weapon" value="Hand Axes" />
              <label for="hand-axes">Hand Axes</label>
            </div>
          
            <div>
              <input type="radio" id="trident" name="weapon" value="Trident" />
              <label for="trident">Trident</label>
            </div>
          </fieldset>`
    
    spellsBox.innerHTML = ` <fieldset class="spells">
          <h3>Spells/Abilities</h3>  
          
            <div>
              <input type="radio" id="second-wind" name="spells" value="Second Wind"/>
              <label for="second-wind"><span class="label-size">Second Wind</span> - You can use a bonus action to regain hit points during your turn.</label>
            </div>
          
            <div>
              <input type="radio" id="action-surge" name="spells" value="Action Surge" />
              <label for="action-surge"><span class="label-size">Action Surge</span> - Once per day you can push yourself beyond your limits to take an extra action in battle during one turn.</label>
            </div>
          
            <div>
              <input type="radio" id="indomitable" name="spells" value="Indomitable" />
              <label for="indomitable"><span class="label-size">Indomitable</span> - You can reroll a failed saving throw once per day.</label>
            </div>
          </fieldset>`
  }
  
  if (element.matches('.paladin') === true) {
    document.querySelector('.barbarian').style.opacity = ''
    document.querySelector('.bard').style.opacity = ''
    document.querySelector('.cleric').style.opacity = ''
    document.querySelector('.druid').style.opacity = ''
    document.querySelector('.fighter').style.opacity = ''
    document.querySelector('.paladin').style.opacity = '100%'
    document.querySelector('.ranger').style.opacity = ''
    document.querySelector('.rogue').style.opacity = ''
    document.querySelector('.warlock').style.opacity = ''
    document.querySelector('.wizard').style.opacity = ''
    classDescription.innerHTML = `<h3 class='class-data'>Paladin</h3> <p>A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the darkness, and to hunt the forces of evil wherever they lurk. They are bound by the oaths that grant them power to do their sacred work.</p>`

    weaponsBox.innerHTML = ` <fieldset class="weapons">
          <h3>Tools/Weapons</h3>  
          
            <div>
              <input type="radio" id="long-sword" name="weapon" value="Long Sword"/>
              <label for="long-sword">Long Sword</label>
            </div>
          
            <div>
              <input type="radio" id="lance" name="weapon" value="Lance" />
              <label for="lance">Lance</label>
            </div>
          
            <div>
              <input type="radio" id="warhammer" name="weapon" value="Warhammer" />
              <label for="warhammer">Warhammer</label>
            </div>
          </fieldset>`
    
    spellsBox.innerHTML = ` <fieldset class="spells">
          <h3>Spells/Abilities</h3>  
          
            <div>
              <input type="radio" id="shield-of-faith" name="spells" value="Shield of Faith"/>
              <label for="shield-of-faith"><span class="label-size">Shield of Faith</span> - A shimmering shield appears and surrounds a creature of your choice within range.</label>
            </div>
          
            <div>
              <input type="radio" id="cure-wounds" name="spells" value="Cure Wounds" />
              <label for="cure-wounds"><span class="label-size">Cure Wounds</span> - A creature that you touch regains a number of hit points.</label>
            </div>
          
            <div>
              <input type="radio" id="divine-smite" name="spells" value="Divine Smite" />
              <label for="divine-smite"><span class="label-size">Divine Smite</span> - Deal radiant damage to a target in addition to their weapon's damage.</label>
            </div>
          </fieldset>`
  }

  if (element.matches('.ranger') === true) {
    document.querySelector('.barbarian').style.opacity = ''
    document.querySelector('.bard').style.opacity = ''
    document.querySelector('.cleric').style.opacity = ''
    document.querySelector('.druid').style.opacity = ''
    document.querySelector('.fighter').style.opacity = ''
    document.querySelector('.paladin').style.opacity = ''
    document.querySelector('.ranger').style.opacity = '100%'
    document.querySelector('.rogue').style.opacity = ''
    document.querySelector('.warlock').style.opacity = ''
    document.querySelector('.wizard').style.opacity = ''
    classDescription.innerHTML = `<h3 class='class-data'>Ranger</h3> <p>Warriors of the wilderness, rangers specialize in hunting the monsters that threaten civilization. A ranger’s talents and abilities are honed with deadly focus on the grim task of protecting their people.</p>`

    weaponsBox.innerHTML = ` <fieldset class="weapons">
          <h3>Tools/Weapons</h3>  
          
            <div>
              <input type="radio" id="long-bow" name="weapon" value="Long Bow"/>
              <label for="long-bow">Long Bow</label>
            </div>
          
            <div>
              <input type="radio" id="crossbow" name="weapon" value="Crossbow" />
              <label for="crossbow">Crossbow</label>
            </div>
          
            <div>
              <input type="radio" id="short-sword" name="weapon" value="Short Sword" />
              <label for="short-sword">Short Sword</label>
            </div>
          </fieldset>`
    
    spellsBox.innerHTML = ` <fieldset class="spells">
          <h3>Spells/Abilities</h3>  
          
            <div>
              <input type="radio" id="hunters-mark" name="spells" value="Hunter's Mark"/>
              <label for="hunters-mark"><span class="label-size">Hunter's Mark</span> - You can do extra damage to a chosen enemy.</label>
            </div>
          
            <div>
              <input type="radio" id="beast-bond" name="spells" value="Beast Bond" />
              <label for="beast-bond"><span class="label-size">Beast Bond</span> - You establish a telepathic link with one beast you touch that is friendly to you or charmed by you.</label>
            </div>
          
            <div>
              <input type="radio" id="hail-of-thorns" name="spells" value="Hail of Thorns" />
              <label for="hail-of-thorns"><span class="label-size">Hail of Thorns</span> - this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition.</label>
            </div>
          </fieldset>`
  }

  if (element.matches('.rogue') === true) {
    document.querySelector('.barbarian').style.opacity = ''
    document.querySelector('.bard').style.opacity = ''
    document.querySelector('.cleric').style.opacity = ''
    document.querySelector('.druid').style.opacity = ''
    document.querySelector('.fighter').style.opacity = ''
    document.querySelector('.paladin').style.opacity = ''
    document.querySelector('.ranger').style.opacity = ''
    document.querySelector('.rogue').style.opacity = '100%'
    document.querySelector('.warlock').style.opacity = ''
    document.querySelector('.wizard').style.opacity = ''
    classDescription.innerHTML = `<h3 class='class-data'>Rogue</h3> <p>Rogues typically focus on stealth, deception and cunning over brute strength. They would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks.</p>`

    weaponsBox.innerHTML = ` <fieldset class="weapons">
          <h3>Tools/Weapons</h3>  
          
            <div>
              <input type="radio" id="daggers" name="weapon" value="Daggers"/>
              <label for="daggers">Daggers</label>
            </div>
          
            <div>
              <input type="radio" id="rapier" name="weapon" value="Rapier" />
              <label for="rapier">Rapier</label>
            </div>
          
            <div>
              <input type="radio" id="crossbow" name="weapon" value="Crossbow" />
              <label for="crossbow">Crossbow</label>
            </div>
          </fieldset>`
    
    spellsBox.innerHTML = ` <fieldset class="spells">
          <h3>Spells/Abilities</h3>  
          
            <div>
              <input type="radio" id="sneak-attack" name="spells" value="Sneak Attack"/>
              <label for="sneak-attack"><span class="label-size">Sneak Attack</span> - Use stealth to attack with advantage and do extra damage to your foe.</label>
            </div>
          
            <div>
              <input type="radio" id="thieves-cant" name="spells" value="Thieve's Cant" />
              <label for="thieves-cant"><span class="label-size">Thieve's Cant</span> - speak with a code that allows you to hide messages in seemingly normal conversation.</label>
            </div>
          
            <div>
              <input type="radio" id="cunning-action" name="spells" value="Cunning Action" />
              <label for="cunning-action"><span class="label-size">Cunning Action</span> - You can take an extra action each turn in battle to dash, disengage or hide.</label>
            </div>
          </fieldset>`
  }

  if (element.matches('.warlock') === true) {
    document.querySelector('.barbarian').style.opacity = ''
    document.querySelector('.bard').style.opacity = ''
    document.querySelector('.cleric').style.opacity = ''
    document.querySelector('.druid').style.opacity = ''
    document.querySelector('.fighter').style.opacity = ''
    document.querySelector('.paladin').style.opacity = ''
    document.querySelector('.ranger').style.opacity = ''
    document.querySelector('.rogue').style.opacity = ''
    document.querySelector('.warlock').style.opacity = '100%'
    document.querySelector('.wizard').style.opacity = ''
    classDescription.innerHTML = `<h3 class='class-data'>Warlock</h3> <p>A warlock is defined by a pact with an otherworldly being that grants them power. The pact may be nefarious in nature, or it may resemble the arrangement between a master and an apprentice, but it never comes without a price.</p>`

    weaponsBox.innerHTML = ` <fieldset class="weapons">
          <h3>Tools/Weapons</h3>  
          
            <div>
              <input type="radio" id="daggers" name="weapon" value="Daggers"/>
              <label for="daggers">Daggers</label>
            </div>
          
            <div>
              <input type="radio" id="short-sword" name="weapon" value="Short Sword" />
              <label for="short-sword">Short Sword</label>
            </div>
          
            <div>
              <input type="radio" id="crossbow" name="weapon" value="Crossbow" />
              <label for="crossbow">Crossbow</label>
            </div>
          </fieldset>`
    
    spellsBox.innerHTML = ` <fieldset class="spells">
          <h3>Spells/Abilities</h3>  
          
            <div>
              <input type="radio" id="eldritch-blast" name="spells" value="Eldritch Blast"/>
              <label for="eldritch-blast"><span class="label-size">Eldritch Blast</span> - A beam of crackling energy streaks toward a creature within range.</label>
            </div>
          
            <div>
              <input type="radio" id="poison-spray" name="spells" value="Poison Spray" />
              <label for="poison-spray"><span class="label-size">Poison Spray</span> - You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm.</label>
            </div>
          
            <div>
              <input type="radio" id="lightning-lure" name="spells" value="Lightning Lure" />
              <label for="lightning-lure"><span class="label-size">Lightning Lure</span> - You create a lash of lightning energy that strikes at one creature of your choice that you can see within range.</label>
            </div>
          </fieldset>`
  }

  if (element.matches('.wizard') === true) {
    document.querySelector('.barbarian').style.opacity = ''
    document.querySelector('.bard').style.opacity = ''
    document.querySelector('.cleric').style.opacity = ''
    document.querySelector('.druid').style.opacity = ''
    document.querySelector('.fighter').style.opacity = ''
    document.querySelector('.paladin').style.opacity = ''
    document.querySelector('.ranger').style.opacity = ''
    document.querySelector('.rogue').style.opacity = ''
    document.querySelector('.warlock').style.opacity = ''
    document.querySelector('.wizard').style.opacity = '100%'
    classDescription.innerHTML = `<h3 class='class-data'>Wizard</h3> <p>Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, they dedicate their lives to the study of magic and spellcasting.</p>`

    weaponsBox.innerHTML = ` <fieldset class="weapons">
          <h3>Tools/Weapons</h3>  
          
            <div>
              <input type="radio" id="spellbook" name="weapon" value="Spellbook"/>
              <label for="spellbook">Spellbook</label>
            </div>
          
            <div>
              <input type="radio" id="quarter-staff" name="weapon" value="Quarter Staff" />
              <label for="quarter-staff">Quarter Staff</label>
            </div>
          
            <div>
              <input type="radio" id="wand" name="weapon" value="wand" />
              <label for="wand">Wand</label>
            </div>
          </fieldset>`
    
    spellsBox.innerHTML = ` <fieldset class="spells">
          <h3>Spells/Abilities</h3>  
          
            <div>
              <input type="radio" id="dancing-lights" name="spells" value="Dancing Lights"/>
              <label for="dancing-lights"><span class="label-size">Dancing Lights</span> - You create up to four torch-sized lights within range.</label>
            </div>
          
            <div>
              <input type="radio" id="mage-hand" name="spells" value="Mage Hand" />
              <label for="mage-hand"><span class="label-size">Mage Hand</span> - A spectral, floating hand appears at a point you choose within range, it can carry up to 10 pounds.</label>
            </div>
          
            <div>
              <input type="radio" id="ray-of-frost" name="spells" value="Ray of Frost" />
              <label for="ray-of-frost"><span class="label-size">Ray of Frost</span> - A frigid beam of ice strikes a creature within range.</label>
            </div>
          </fieldset>`
  }
console.log(document.querySelector('.class-data').textContent)

})


