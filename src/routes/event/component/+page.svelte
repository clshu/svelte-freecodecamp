<script>
	import Profile from '$lib/components/Profile.svelte';

	// A diiferent way to pass props to child component
	// const onSkillPointChange = (newSkillPoint) => {
	// 	console.log('newSkillPoint: ', newSkillPoint);
	// };

	function onSkillPointChange(event) {
		console.log('newSkillPoint: ', event.detail);
	}
</script>

<Profile name="John" status="Learning Svelte" on:skillPointChanged={onSkillPointChange} />
<!-- No nSkillPointChange passed to child -->
<Profile name="Jane" status="Learning React" />
