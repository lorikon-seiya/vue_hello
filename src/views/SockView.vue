<template>
  <div class="photo-wall">
    <div
      class="photo-card"
      v-for="(photo, index) in photos"
      :key="index"
      @click="openLightbox(index)"
    >
      <img :src="photo.src" :alt="photo.title" />
      <div class="photo-title">{{ photo.title }}</div>
    </div>

    <!-- Lightbox -->
    <teleport to="body">
      <div v-if="lightboxIndex !== null" class="lightbox" @click.self="closeLightbox">
        <button class="close-btn" @click="closeLightbox">×</button>
        <img :src="photos[lightboxIndex].src" :alt="photos[lightboxIndex].title" />
        <div class="lightbox-title">{{ photos[lightboxIndex].title }}</div>
        <button class="prev-btn" @click.stop="prevPhoto">‹</button>
        <button class="next-btn" @click.stop="nextPhoto">›</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";

const photos = ref([
  {
    src: new URL("@/assets/images/IMG_2706.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_2718.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_2764.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_2946.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_2947.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_3121.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_3265.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_3310.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_3360.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_3433.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_3587.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_3686.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_3850.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_4105.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_4107.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_4762.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_4775.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_5245.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_5303.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_5456.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_5468.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_5544.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_5303.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/IMG_5588.jpeg", import.meta.url).href,
    title: "自然",
  },
  {
    src: new URL("@/assets/images/WechatIMG265.jpeg", import.meta.url).href,
    title: "自然",
  },
]);

const lightboxIndex = ref(null);

const openLightbox = (index) => {
  lightboxIndex.value = index;
};

const closeLightbox = () => {
  lightboxIndex.value = null;
};

const prevPhoto = () => {
  lightboxIndex.value =
    (lightboxIndex.value - 1 + photos.value.length) % photos.value.length;
};

const nextPhoto = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % photos.value.length;
};
</script>

<style scoped>
.photo-wall {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 20px;
}

.photo-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  background: #fff;
}
.photo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}
.photo-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.photo-title {
  padding: 10px;
  font-weight: bold;
  text-align: center;
  color: #333;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}
.lightbox img {
  max-width: 90%;
  max-height: 80%;
  border-radius: 12px;
  margin-bottom: 10px;
}
.lightbox-title {
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
}
.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  background: transparent;
  color: #fff;
  font-size: 40px;
  border: none;
  cursor: pointer;
}
.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  border: none;
  font-size: 40px;
  color: #fff;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.2s;
}
.prev-btn:hover,
.next-btn:hover {
  background: rgba(255, 255, 255, 0.7);
}
.prev-btn {
  left: 20px;
}
.next-btn {
  right: 20px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
