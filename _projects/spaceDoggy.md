---
layout: page
title: Quadrupedal Landing Control Under Low Gravity
description: Quadrupedal attitude control & landing control under reduced gravity with diverse initial poses, trained using Proximal Policy Optimization (PPO)
img: assets/img/spacedoggy.png
importance: 2
category: 2025
---

***
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![Mujoco](https://img.shields.io/badge/Mujoco-0f3591?style=for-the-badge&logo=deepmind&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)
![JAX](https://img.shields.io/badge/JAX-%23ffffff.svg?style=for-the-badge&logo=JAX&logoColor=black)
![wandb](https://img.shields.io/badge/wandb-FFBE00?style=for-the-badge&logo=WeightsAndBiases&logoColor=white)

***

Link to [Github Repo](https://github.com/Epon-Wang/SpaceDoggy)

### **Demo**

- **Attitude Control**
  
  <div style="text-align: center;">
    <img src="Reorientation-20251204-222058.gif" alt="reorientation" style="zoom: 60%;" />
  </div>

- **Landing Control**
  
  <div style="text-align: center;">
    <img src="rsl-rl_LandingGranular-20251205-224244.gif" alt="landing" style="zoom: 60%;" />
  </div>

### **Description**
- Mitigated the computational intractability of fine-grained particle simulation of granular terrains by implementing the vertical resistive force component of a granular media contact model within MuJoCo, enabling rigid-body approximation of loose-sand impact dynamics
- Leveraged MuJoCo MJX (JAX) and MuJoCo Playground for mass environment vectorization on GPU, enabling high-throughput Proximal Policy Optimization (PPO) training that generalizes across arbitrary task configurations via domain randomization
- Trained a zero-gravity attitude control policy for Unitree Go1 quadruped to execute precise aerial reorientation that exploits the conservation of angular momentum to dynamically redistribute rotational inertia
- Demonstrated robust landing capabilities by integrating attitude control with impact recovery; the learned policy leverages articulated compliance to dissipate impact energy, achieving stable four-foot touchdown on the granular terrain from arbitrary initial orientations