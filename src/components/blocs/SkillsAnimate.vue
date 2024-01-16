<template>
  <section>
    <div class="parent-skill" v-for="skill in skills" :key="skill.title">
      <svg class="skill" viewBox="0 0 36 36">
        <path
          class="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          class="circle"
          :class="{ 'complete': skill.currentProgress >= skill.progress }"
          :style="{ strokeDasharray: circleStrokeDashArray(skill.currentProgress), stroke: skill.color }"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <span class="title">{{ skill.title }}</span>
      <div class="skills-progress">{{ skill.progress }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsProgress',

  data() {
    return {
      skills: [
        { title: 'HTML', progress: 80, currentProgress: 0, color: '#f9004d' },
        { title: 'Javascript', progress: 65, currentProgress: 0, color: '#f9004d' },
        { title: 'React', progress: 50, currentProgress: 0, color: '#f9004d' },
      ],
    };
  },

  mounted() {
    this.animateProgress();
  },

  methods: {
    animateProgress() {
      let max = Math.max(...this.skills.map(skill => skill.progress));
      // Réduire l'intervalle ou augmenter 'step' accélérera l'animation
      let interval = 10; // Intervalle plus court pour une animation plus rapide
      let increment = 1; // Plus grande progression par rafraîchissement
      
      let frame = () => {
        let complete = true;

        for (let skill of this.skills) {
          if (skill.currentProgress < skill.progress) {
            skill.currentProgress += increment;
            complete = false;
          }
          if (skill.currentProgress > skill.progress) {
            skill.currentProgress = skill.progress;
          }
        }

        if (!complete) {
          setTimeout(frame, interval);
        }
      };

      setTimeout(frame, interval);
    },

    circleStrokeDashArray(progress) {
      const radius = 15.9155; // Circumference of the circle
      const circumference = 2 * Math.PI * radius;
      const offset = (progress / 100) * circumference;

      return `${offset} ${circumference}`;
    },
  },
};
</script>
