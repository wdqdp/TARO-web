/* Source of truth for task walkthroughs, condition trials, and ablations. */
window.TARO_MEDIA = {
  "tasks": {
    "blackbox": {
      "name": "Black-box",
      "default": "C2",
      "clips": [
        {
          "id": "C2",
          "media": "blackbox-c2-cap",
          "description": "Weight left of center",
          "captioned": true
        },
        {
          "id": "C1",
          "media": "blackbox-c1",
          "description": "Leftmost weight"
        },
        {
          "id": "C3",
          "media": "blackbox-c3",
          "description": "Centered weight"
        },
        {
          "id": "C4",
          "media": "blackbox-c4",
          "description": "Weight right of center"
        },
        {
          "id": "C5",
          "media": "blackbox-c5",
          "description": "Rightmost weight"
        }
      ]
    },
    "book": {
      "name": "Book",
      "default": "C1",
      "clips": [
        {
          "id": "C1",
          "media": "book-c1-cap",
          "description": "Three books on the left",
          "captioned": true
        },
        {
          "id": "C2",
          "media": "book-c2",
          "description": "Three books on the right"
        },
        {
          "id": "C3",
          "media": "book-c3",
          "description": "Two books on the left"
        },
        {
          "id": "C4",
          "media": "book-c4",
          "description": "Two books on the right"
        }
      ]
    },
    "bottle": {
      "name": "Bottle",
      "default": "C2",
      "clips": [
        {
          "id": "C2",
          "media": "bottle-c2-cap",
          "description": "180° remaining twist",
          "captioned": true
        },
        {
          "id": "C1",
          "media": "bottle-c1",
          "description": "90° remaining twist"
        }
      ]
    },
    "sponge": {
      "name": "Sponge",
      "default": "C1",
      "clips": [
        {
          "id": "C1",
          "media": "sponge-c1-cap",
          "description": "Obstacle near the start",
          "captioned": true
        },
        {
          "id": "C2",
          "media": "sponge-c2",
          "description": "Obstacle midway along the path"
        },
        {
          "id": "C3",
          "media": "sponge-c3",
          "description": "Obstacle near the target"
        }
      ]
    }
  },
  "media": {
    "blackbox-c1": {
      "source": "blackbox/C1.mov",
      "src": "blackbox-c1.mp4",
      "poster": "blackbox-c1-poster.jpg",
      "cover": 3,
      "width": 1280,
      "speed": "2× speed"
    },
    "blackbox-c3": {
      "source": "blackbox/C3.mov",
      "src": "blackbox-c3.mp4",
      "poster": "blackbox-c3-poster.jpg",
      "cover": 3,
      "width": 1280,
      "speed": "2× speed"
    },
    "blackbox-c4": {
      "source": "blackbox/C4.mov",
      "src": "blackbox-c4.mp4",
      "poster": "blackbox-c4-poster.jpg",
      "cover": 3,
      "width": 1280,
      "speed": "2× speed"
    },
    "blackbox-c5": {
      "source": "blackbox/C5.mov",
      "src": "blackbox-c5.mp4",
      "poster": "blackbox-c5-poster.jpg",
      "cover": 3,
      "width": 1280,
      "speed": "2× speed"
    },
    "book-c2": {
      "source": "book/C2.mov",
      "src": "book-c2.mp4",
      "poster": "book-c2-poster.jpg",
      "cover": 3,
      "width": 1280,
      "speed": "2× speed"
    },
    "book-c3": {
      "source": "book/C3.mov",
      "src": "book-c3.mp4",
      "poster": "book-c3-poster.jpg",
      "cover": 3,
      "width": 1280,
      "speed": "2× speed"
    },
    "book-c4": {
      "source": "book/C4.mov",
      "src": "book-c4.mp4",
      "poster": "book-c4-poster.jpg",
      "cover": 3,
      "width": 1280,
      "speed": "2× speed"
    },
    "bottle-c1": {
      "source": "bottle/C1.mov",
      "src": "bottle-c1.mp4",
      "poster": "bottle-c1-poster.jpg",
      "cover": 3,
      "width": 1280,
      "speed": "2× speed"
    },
    "sponge-c3": {
      "source": "sponge/C3.mov",
      "src": "sponge-c3-revised.mp4",
      "poster": "sponge-c3-revised-poster.jpg",
      "cover": 3,
      "width": 1280,
      "speed": "2× speed"
    },
    "blackbox-wo-tactile": {
      "source": "blackbox/wo_tactile.mov",
      "src": "blackbox-wo-tactile.mp4",
      "poster": "blackbox-wo-tactile-poster.jpg",
      "cover": 3,
      "width": 1920,
      "speed": "2× speed"
    },
    "book-wo-tactile": {
      "source": "book/wo_tactile.mov",
      "src": "book-wo-tactile.mp4",
      "poster": "book-wo-tactile-poster.jpg",
      "cover": 3,
      "width": 1920,
      "speed": "2× speed"
    },
    "bottle-wo-tactile": {
      "source": "bottle/wo_tactile.mov",
      "src": "bottle-wo-tactile.mp4",
      "poster": "bottle-wo-tactile-poster.jpg",
      "cover": 3,
      "width": 1920,
      "speed": "Mixed speeds · see in-video labels"
    },
    "sponge-wo-tac-1": {
      "source": "sponge/wo_tac_1.mov",
      "src": "sponge-wo-tac-1.mp4",
      "poster": "sponge-wo-tac-1-poster.jpg",
      "cover": 3,
      "width": 1920,
      "speed": "2× speed"
    },
    "sponge-wo-tac-o": {
      "source": "sponge/wo_tac_o.mov",
      "src": "sponge-wo-tac-o.mp4",
      "poster": "sponge-wo-tac-o-poster.jpg",
      "cover": 3,
      "width": 1920,
      "speed": "2× speed"
    },
    "blackbox-wo-history": {
      "source": "blackbox/wo_history.mov",
      "src": "blackbox-wo-history.mp4",
      "poster": "blackbox-wo-history-poster.jpg",
      "cover": 3,
      "width": 1920,
      "speed": "2× speed"
    },
    "book-wo-history": {
      "source": "book/wo_history.mov",
      "src": "book-wo-history.mp4",
      "poster": "book-wo-history-poster.jpg",
      "cover": 3,
      "width": 1920,
      "speed": "2× speed"
    },
    "blackbox-c2-cap": {
      "source": "blackbox/C2_cap.mov",
      "src": "blackbox-c2-cap.mp4",
      "poster": "blackbox-c2-cap-poster.jpg",
      "cover": 3,
      "width": 1920,
      "crf": 20,
      "audio": true,
      "speed": "Speeds as labeled"
    },
    "book-c1-cap": {
      "source": "book/C1_cap.mov",
      "src": "book-c1-cap.mp4",
      "poster": "book-c1-cap-poster.jpg",
      "cover": 3,
      "width": 1920,
      "crf": 20,
      "audio": true,
      "speed": "Speeds as labeled"
    },
    "bottle-c2-cap": {
      "source": "bottle/C2_cap.mov",
      "src": "bottle-c2-cap.mp4",
      "poster": "bottle-c2-cap-poster.jpg",
      "cover": 3,
      "width": 1920,
      "crf": 20,
      "audio": true,
      "speed": "Speeds as labeled"
    },
    "sponge-c1-cap": {
      "source": "sponge/C1_cap.mov",
      "src": "sponge-c1-cap.mp4",
      "poster": "sponge-c1-cap-poster.jpg",
      "cover": 3,
      "width": 1920,
      "crf": 20,
      "audio": true,
      "speed": "Speeds as labeled"
    },
    "sponge-c2": {
      "source": "sponge/C2.mov",
      "src": "sponge-c2.mp4",
      "poster": "sponge-c2-poster.jpg",
      "cover": 3,
      "width": 1280,
      "speed": "2× speed"
    }
  },
  "cases": [
    {
      "id": "blackbox",
      "label": "Black-box",
      "task": "blackbox",
      "title": "A tilt in the wrong direction.",
      "mechanism": "FAILURE DIAGNOSIS",
      "description": "The actual failure is roll_neg, but the no-tactile model predicts roll_pos. It then recovers in the wrong direction.",
      "outcome": "Task failed",
      "detail": "Incorrect contact diagnosis leads to an incorrect recovery.",
      "media": "blackbox-wo-tactile"
    },
    {
      "id": "book",
      "label": "Book",
      "task": "book",
      "title": "Recovering when it should continue.",
      "mechanism": "NEED · FALSE TRIGGER",
      "description": "Vision alone incorrectly predicts Need = true during an insertion that does not require recovery. The unnecessary intervention causes the task to fail.",
      "outcome": "Task failed",
      "detail": "Failure includes an intervention that disrupts an otherwise valid task action.",
      "media": "book-wo-tactile"
    },
    {
      "id": "bottle",
      "label": "Bottle",
      "task": "bottle",
      "title": "An open cap can still be a failed trial.",
      "mechanism": "CONTACT RESISTANCE",
      "description": "The cap requires a 180° twist. After only 90°, the no-tactile model misses the upward resistance and forcibly pulls the cap off instead of recovering.",
      "outcome": "Task failed",
      "detail": "Although the cap comes off, this behavior is counted as failure under the paper’s task criteria.",
      "media": "bottle-wo-tactile"
    },
    {
      "id": "sponge-contact",
      "label": "Sponge · missed contact",
      "task": "sponge",
      "title": "The obstacle is hidden. The contact is not.",
      "mechanism": "NEED · MISSED CONTACT",
      "description": "With no tactile input, the model fails to recognize contact with the occluded obstacle and keeps moving, causing the task to fail.",
      "outcome": "Task failed",
      "detail": "Vision alone does not reliably reveal the blocked motion.",
      "media": "sponge-wo-tac-1"
    },
    {
      "id": "sponge-trigger",
      "label": "Sponge · false trigger",
      "task": "sponge",
      "title": "No obstacle. An unnecessary recovery.",
      "mechanism": "NEED · FALSE TRIGGER",
      "description": "Even without an obstacle, the no-tactile model triggers Need = true near a fixed position associated with recovery in the demonstrations.",
      "outcome": "Task failed",
      "detail": "This false activation is counted as failure under the paper’s task criteria. This clip has no obstacle; the TARO obstacle demos use different settings.",
      "media": "sponge-wo-tac-o"
    }
  ],
  "history": [
    {
      "id": "blackbox",
      "label": "Black-box",
      "media": "blackbox-wo-history",
      "title": "The recovery needs a stopping point.",
      "description": "Without recent robot motion history, End fails to recognize that the recovery is complete. In this Black-box trial, the robot keeps moving right.",
      "detail": "This ablation removes motion history used to assess recovery progress; it is distinct from global failure history used for planning."
    },
    {
      "id": "book",
      "label": "Book",
      "media": "book-wo-history",
      "title": "The recovery needs a stopping point.",
      "description": "Without recent robot motion history, End fails to recognize that the recovery is complete. In this Book trial, the robot keeps moving right.",
      "detail": "This ablation removes motion history used to assess recovery progress; it is distinct from global failure history used for planning."
    }
  ]
};
